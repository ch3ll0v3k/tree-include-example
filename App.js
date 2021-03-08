

const routes = require('./routes');

module.exports = Rest = class Rest{

  constructor(){
    this.express = express();
    this.init();
  }


  async init(){

    this.express.use( await routes(this) );

  }


}