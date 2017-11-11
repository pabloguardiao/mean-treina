var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

// GETTING DATA FROM MONGO DB
// router.get('/', function (req, res, next) {
//     console.log("CHEGOU");
//     User.findOne({}, function(err, doc) {
//         if (err) {
//             console.log("ERRO");
//             return res.send('Erro!');
//         }
//         console.log("OK");
//         res.render('node', {email: doc.email});
//     })
// });

// router.post('/', function (req, res, next) {
//     var email = req.body.email;
//     var user = new User({
//         firstName: 'Pablo',
//         lastName: 'Lima',
//         password: 'asdf',
//         email: email
//     });
//     user.save();
//     res.redirect('/');
// });

module.exports = router;
