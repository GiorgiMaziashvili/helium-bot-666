var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {

   console.log('request starting for ');
   console.log(request);

   var filePath = '.' + request.url;
   if (filePath == './')
       filePath = './src/bot.js';

   var contentType = 'text/javascript';

   fs.exists(filePath, function(exists) {

       if (exists) {
           fs.readFile(filePath, function(error, content) {
               if (error) {
                   response.writeHead(500);
                   response.end();
               }
               else {
                   response.writeHead(200, { 'Content-Type': contentType });
                   response.end(content, 'utf-8');
               }
           });
       }
       else {
           response.writeHead(404);
           response.end();
       }
   });

}).listen(process.env.PORT || 3000);