var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    if (pathname == '/') {
        pathname = '../../index.html';
    }
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // 페이지를 찾을 수 없음
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // 페이지를 찾음
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/html' });

            // 파일을 읽어와서 responseBody 에 작성
            response.write(data.toString());
        }
        // responseBody 전송
        response.end();
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
