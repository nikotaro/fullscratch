/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	add: function (req, res) {

		User.create({
      username: String(req.params.username),
			password: String(req.params.password),
    }).exec(function(err,data){
      if(err){
        return res.error()
      }
      console.log(data)
      return res.ok({
        user: data
      })
    })

  }

};
