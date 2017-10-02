import appService from '../../services/appService';

class LoremOutputController{
  getDefaultJsonData() {
      const rawJson =  new appService().getJsonData();
      return rawJson;
  }
  getJsonData(formData){
      let jsonData = this.getDefaultJsonData();
      jsonData = this.shuffleData(formData.loremShuffle,jsonData);
      jsonData = this.addTitles(formData.loremTitle,jsonData);
      jsonData = this.getParagraph(formData.loremAmount,jsonData);
      return jsonData.text;
  }
  shuffleData(loremShuffle,jsonData){
      if(loremShuffle !== true) return jsonData;

        let currentIndex = jsonData.text.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = jsonData.text[currentIndex];
          jsonData.text[currentIndex] = jsonData.text[randomIndex];
          jsonData.text[randomIndex] = temporaryValue;
        }
        return jsonData;
  }
  addTitles(loremTitle,jsonData){
    console.log('in',jsonData);

      if(loremTitle !== true) return jsonData;
      let newJsonData = [];

      for(let i = 0;i < jsonData.text.length;i++){
        newJsonData.push(jsonData.title,jsonData.text[i])
      }
      jsonData.text = newJsonData;
      console.log(jsonData);
      return jsonData;
  }
  getParagraph(amount,jsonData){
      if(amount && jsonData.text.length > amount){
          jsonData.text = jsonData.text.slice(0,amount);
      }
      return jsonData;
  }
}

const LoremOutput = new LoremOutputController();
export default LoremOutput;
