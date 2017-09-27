import appService from '../../services/appService';

class LoremOutputController{
  getDefaultJsonData() {
      const rawJson =  appService.getJsonData();

      return rawJson[0].text;
  }
}

const LoremOutput = new LoremOutputController();
export default LoremOutput;
