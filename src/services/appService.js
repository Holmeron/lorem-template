import jsonData from '../../data/lorem.json';

class appService {
    constructor(){
      this.rawData = jsonData;
    }
    getJsonData(){
      // enforce new object
      const jsonData = { ...this.rawData[0]}
      return jsonData
    }
}

export default appService;
