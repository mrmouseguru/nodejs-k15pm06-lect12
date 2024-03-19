import http from "http"

let server = http.createServer();


server.on("request", (req, res) => {
    console.log(`Got a request for ${req.method} ${req.url}` );
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello from a Node JS server");

});




server.listen(9999 , () =>{
    console.log("Now Listening on port 9999....");
})