const http = require('http');
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const body = [];
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><head><title>Enter Message</title></head>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body></html>');
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.write('<html><body><h1>Internal Server Error</h1></body></html>');
                    return res.end();
                }
                res.writeHead(302, { 'Location': '/' });
                return res.end();
            });
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Page</title></head>');
        res.write('<body><h1>Hello from my Node Js Server</h1></body>')
        res.write('</html>');
        res.end();
    }
}

module.exports = requestHandler;