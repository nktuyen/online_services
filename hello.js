const http = require('http');


const path = "/home/tuyen/Downloads/GEODATASOURCE-CITIES-FREE.TXT/GEODATASOURCE-REGION.TXT";
const Regions = require('./regions');
var regions = new Regions();
regions.parseGeoData(path, function() {
    console.log('Total '+ regions.count() + ' regions are loaded.');
});
console.log('Server is running...');
http.createServer(function(request,response){
    console.log(request);
    response.writeHead(200, {'Content-type':'text/plain'});
    response.end();
}).listen(8080);