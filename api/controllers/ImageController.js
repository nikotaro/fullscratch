/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	add: function (req, res) {
    Image.create({
      rst_id: String(req.params.restid),
			usr_id: String(req.params.userid),
			image_url: String(req.params.imageurl),
    }).exec(function(err,data){
      if(err){
        return res.error()
      }
      console.log(data)
      return res.ok({
        images: data
      })
    })
  },//end of "add"

};
