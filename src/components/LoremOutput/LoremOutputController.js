import appService from '../../services/appService';

class LoremOutputController{
  getDefaultJsonData() {
      const rawJson =  appService.getJsonData();
      const data = rawJson;
      return rawJson[0].text;
  }
  getJsonData(formData){
    let jsonData = this.getDefaultJsonData()
    formData = this.shuffleData(formData.isShuffled,jsonData);
    formData = this.getParagraph(formData.loremAmount,jsonData);
    return formData;
  }
  shuffleData(isShuffled,jsonData){
    if(isShuffled !== 'true') return jsonData;

    for (let i = jsonData.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [jsonData[i - 1], jsonData[j]] = [jsonData[j], jsonData[i - 1]];
    }
    return jsonData;
  }
  getParagraph(amount,jsonData){
    if(amount && jsonData.length > amount){
      jsonData = jsonData.slice(0,amount);
    }
    return jsonData;
  }
}

const LoremOutput = new LoremOutputController();
export default LoremOutput;
