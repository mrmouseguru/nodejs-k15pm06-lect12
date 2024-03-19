import express from "express"

let app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express");
});

app.get("/api/test", (req, res) => {
    res.json({text : "Hellowrld",
                num : 9999});
});

app.get("/api/students/:binky", (req, res) => {
    let studentId = req.params.binky;
    console.log(studentId);
    res.json({message : `Hello ${studentId}`});
});


//api: GET: /text to response to client a text 
//that reading form myfile.text file

app.use("/files" , express.static("public"));

app.listen(9999, () =>{

    console.log("Now listening on port 9999....")

});