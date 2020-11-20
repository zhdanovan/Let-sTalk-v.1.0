const http = require("http");
const messages = [];
const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};

const server = http.createServer(function(request, response) {
    if (request.method === "POST") {
        console.log("POST");
        request.on("data", function(data) {
            console.log(data.toString());
            const newMessage = JSON.parse(data.toString());
            newMessage.id = Math.random().toString(36).substring(2);
            messages.push(newMessage);
        });
        request.on("end", function() {
            response.writeHead(200, defaultHeaders);
            response.end(JSON.stringify(messages));
        })
    } else {
        console.log("GET");
        response.writeHead(200, defaultHeaders);
        response.end(JSON.stringify(messages))
    }
})

const port = 3000;
const host = "0.0.0.0";
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);