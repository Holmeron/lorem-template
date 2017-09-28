import appService from '../../services/appService';

class LoremOutputController{
  getDefaultJsonData() {
      const rawJson =  appService.getJsonData();
      const data = rawJson;
      return rawJson[0].text;
  }
  getJsonData(formData){
    console.log('in',formData);
  }
}

const LoremOutput = new LoremOutputController();
export default LoremOutput;
