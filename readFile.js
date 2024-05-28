const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
    const url = req.url;
    const method = req.method;
    const body = [];

    if(url === '/'){
        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {
            if(err){
                console.log(err);
            }
            console.log(data);
            res.writeHead(200, {'Content-Type': 'text/html' });
            res.write('<html><head><title>Enter Message</title></head>');
            res.write(`<body><div>${data}</div>`)
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            res.write('</body></html>');
            return res.end();
        })
    }else if(url === '/message' && method === 'POST'){
        req.on('data' , (chunk) => {
            body.push(chunk);
        })
        return req.on('end' , () => {
            const parseBody = Buffer.concat(body).toString();
            console.log( parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt' , message , (err) => {
                if(err){
                    console.log(err);
                }
                res.writeHead(302, { 'Location': '/' });
                return res.end();
            });
        }) 
    }
}).listen(5000 , () => console.log('Server started on port 5000'));