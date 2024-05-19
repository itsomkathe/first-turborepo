import express from "express"

const app = express();

app.get("/", (req,res)=>{
    return res.json("Hello World")
});

console.log("BACKEND STARTING")

app.listen(3300);