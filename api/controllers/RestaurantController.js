/**
 * RestaurantController
 *
 * @description :: Server-side logic for managing restaurants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/* APIを使用しての店舗情報のアップロード */
  add: function (req, res) {
    Restaurant.create({
      rst_name: String(req.params.restname),
      rst_location: [Number(req.params.latitude), Number(req.params.longitude)],
    }).exec(function(err,data){
      if(err){
        return res.error()
      }
      console.log(data)
      return res.ok({
        restaurants: data
      })
    })
  },//end of "add"

};
