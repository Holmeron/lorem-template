import appService from '../../services/appService';

class LoremOutputController{
  getDefaultJsonData() {
      const rawJson =  new appService().getJsonData();
      return rawJson;
  }
  getJsonData(formData){
      let jsonData = this.getDefaultJsonData();
      jsonData = this.shuffleData(formData.loremShuffle,jsonData);
      jsonData = this.getParagraph(formData.loremAmount,jsonData);
      jsonData = this.getHtmlTags(formData.loremTags,jsonData);
      jsonData = this.addTitles(formData.loremTitle, formData.loremTags,jsonData);
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
  addTitles(loremTitle,loremTags,jsonData){

      if(loremTitle !== true) return jsonData;
      let newJsonData = [];

      for(let i = 0;i < jsonData.text.length;i++){
        const jsonDataTitle = loremTags === true ? `<h4>${jsonData.title}</h4>` : `${jsonData.title}`;
        newJsonData.push(jsonDataTitle);
        newJsonData.push(jsonData.text[i]);
      }
      jsonData.text = newJsonData;
      return jsonData;
  }
  getParagraph(amount,jsonData){
      if(amount && jsonData.text.length > amount){
          jsonData.text = jsonData.text.slice(0,amount);
      }
      return jsonData;
  }
  getHtmlTags(tags,jsonData){

      if(tags !== true) return jsonData;
      let newJsonData = [];
      console.log(jsonData);
      for(let i=0;i<jsonData.text.length;i++){
        jsonData.text[i] = jsonData.text[i].map((line)=>{
          return `<p>${line}</p>`;
        })
      }
      console.log('output',jsonData);
      return jsonData;
  }
  copyText(text){

    text.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      text.deselect();
    } catch (err) {
      console.log('Oops, unable to copy');
    }

  }
}

const LoremOutput = new LoremOutputController();
export default LoremOutput;
