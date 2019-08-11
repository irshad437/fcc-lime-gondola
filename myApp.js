
var bodyParser = require('body-parser')
var express = require('express');
var app = express();

/** 7) Root-level Middleware - A logger */
// app.use(function(req, res, next){
//   console.log(req.method + ' ' +  req.path + ' - ' + req.ip)
//   next()
// })


// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({"extended": false}))

/** 1) Meet the node console. */
// console.log('Hello World')

/** 2) A first working Express Server */
// app.get('/', function(req, res){
//   res.send('Hello Express')
// })

/** 3) Serve an HTML file */
app.get('/', function(req, res){
  var filename = __dirname + '/views/index.html'
  res.sendFile(filename)
})

/** 4) Serve static assets  */
app.use(express.static(__dirname + '/public'))

/** 5) serve JSON on a specific route */
// app.get('/json', function(req, res){
//   response = "Hello json"
//   res.json({"message": response})
// })

/** 6) Use the .env file to configure the app */
//  app.get('/json', function(req, res){
//   response = "Hello json"
//   if(process.env.MESSAGE_STYLE == 'uppercase')
//     response = response.toUpperCase()
//   res.json({"message": response})
// })

/** 8) Chaining middleware. A Time server */
// app.get('/now', function(req, res, next) {
//         req.time = new Date().toString()
//         next()
//         }, function(req, res){
//           res.json({"time": req.time})
//         })

/** 9)  Get input from client - Route parameters */
// app.get('/:word/echo', function(req, res){
//   res.json({"echo": req.params.word})
// })

/** 10) Get input from client - Query parameters */
// app.route('/name').get(function(req, res){
//   var fullname = req.query.first + ' ' + req.query.last
//   res.json({ name: fullname})
// })
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.route('/name')
  .get(function(req, res){
  var fullname = req.query.first + ' ' + req.query.last
  res.json({ name: fullname})
})
  .post(function(req, res){
  var fullname = req.body.first + ' ' + req.body.last
  res.json({ name: fullname})
})

/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
