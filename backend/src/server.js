import express from "express";
import routeNotes from "./route/routeNotes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


const app=express();
const port=process.env.PORT || 5001


app.use(express.json()) // Helps you convert to json
app.use(rateLimiter)

app.get("/", (req, res) => {
  res.send("🚀 Notes API is running! Try /api/notes");
});

app.use("/api/notes",routeNotes)


// custom middle ware
// app.use((req,res,next)=>{
//     console.log(`Request method ${req.method} and URL is ${req.url}`)
//     next()
// })


connectDB().then(()=>{
app.listen(port,()=>{
    console.log(`Server started at port: ${port}`)
});

})


// const app = express();

// app.get("/", (req, res) => {
//     console.log("received request");
//     res.send("✅ Hello! Express is working on port 5001"); // <-- send response
// });

// app.listen(5001, () => {
//     console.log("🚀 Server running at http://localhost:5001");
// });