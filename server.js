const http = require('http');
const path = require('path');
const fs = require('fs');

const indexHtmlFile = fs.readFileSync(path.join(__dirname, 'static', 'index.html'), 'utf8');
const styleFile = fs.readFileSync(path.join(__dirname, 'static', 'style.css'), 'utf8');
const scriptFile = fs.readFileSync(path.join(__dirname, 'static', 'script.js'), 'utf8');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            return res.end(indexHtmlFile);
        case '/script.js':
            return res.end(scriptFile);
        case '/style.css':
            return res.end(styleFile);
        default:
            res.statusCode = 404;
            res.end('Error 404: Not Found');
    }
});

server.listen(3000, () => {
    console.log('y');
});
