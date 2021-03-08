
const all = require('./all');
const get_auth = require('./get/auth');
const post_token = require('./get/post_token');

module.exports = async (Rest)=>{

  // Если тебе их не нужно возвращать, а просто нужно подключить, тогда можно так...
  await all( Rest );
  await get_auth( Rest );
  await post_token( Rest );

  // Если тебе их нужно вернуть, что бы потом что то сделать, можно так

  return {
    all: await all( Rest ),
    get_auth: await get_auth( Rest ),
    post_token: await post_token( Rest ),
  };

}