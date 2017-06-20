module.exports = {};

module.exports.getJson = function(req,res){
	jsonData = {
		'status':'test'
	};

	res.json(jsonData);
}