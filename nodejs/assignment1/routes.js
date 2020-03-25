const fs = require('fs');
var username = ''

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h1>Welcome to assignment 1</h1>');
        res.write('<form action="/create-user" method="POST">Username: <input type="text" name="username"><button type="submit">Create</button></form>');
        res.write('</body>')
        res.write('<html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data',(username) => {
            console.log(username);
            body.push(username);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            username = parseBody.split('=')[1]
            res.writeHead(302, {'Location': '/users'});
            return res.end();
        });
    }
    if (url === '/users' && method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h2>List of users:</h2>');
        res.write('<ul><li>');
        res.write(username)
        res.write('</ul></li>');
        res.write('</body>');
        res.write('<html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>LAlaLALLAL</hi></body>');
    res.write('<html>');
    res.end();
};

// module.exports = {
//     handler: requestHandler,
//     someText: "text"
// };

exports.handler = requestHandler;
// exports.someText = "some hard coded text";