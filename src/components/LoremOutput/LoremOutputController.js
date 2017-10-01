import appService from '../../services/appService';

class LoremOutputController{
  getDefaultJsonData() {
      const rawJson =  appService.getJsonData();
      const data = rawJson;
      return rawJson[0].text;
  }
  getJsonData(formData){
      let jsonData = this.getDefaultJsonData()
      jsonData = this.shuffleData(formData.isShuffled,jsonData);
      jsonData = this.getParagraph(formData.loremAmount,jsonData);
      return jsonData;
  }
  shuffleData(isShuffled,jsonData){
      if(isShuffled !== 'true') return jsonData;

        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
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
