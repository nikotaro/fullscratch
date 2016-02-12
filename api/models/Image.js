/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    rst_id : {
      model: 'Restaurant',
      required: true
    },
    usr_id : {
      model: 'User',
      required: true
    },
    image_url : {
      type : 'string',
      required: true
    },
    addeddate:{
            type: 'datetime',
            defaultsTo: function (){ return new Date(); }
    },
    del_f:{ //店舗の削除フラグ
        type : 'integer',
        defaultsTo: 0
    }

  }
};
