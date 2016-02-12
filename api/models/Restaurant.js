/**
* Restaurant.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        rst_name: { //店名
            type: 'string',
            //required: true,
        },
        rst_location: { //住所の緯度経度情報
            type : 'array',
            required: true,
        },
        del_f:{ //店舗の削除フラグ
            type : 'integer',
            defaultsTo: 0
        },

        //other model
        images    : {
        collection : 'Image',
        via        : 'rst_id'
        }
  }
};
