const http = require("http");
const messages = [];
const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};

const server = http.createServer(function (request, response) {
    if (request.method === "POST") {
        console.log("POST");
        request.on("data", function (data) {
            console.log(data.toString());
            messages.push(JSON.parse(data.toString()));
        });
        request.on("end", function () {
            response.writeHead(200, defaultHeaders);
            response.end(JSON.stringify(messages));
        })
    } else {
        console.log("GET");
        //console.log(request);
        response.writeHead(200, defaultHeaders);
        response.end(JSON.stringify(messages))
    }
})

const port = 3000;
const host = "0.0.0.0";
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);