/* GET home page. */

// exports a named function
module.exports.index = function(req, res) {
 // Name of the template file to be used for view
 // and a javascript object to pass data
 res.render('index', { title: 'Mingle' });
};
