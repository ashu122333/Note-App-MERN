import express from "express";
import routeNotes from "./route/routeNotes.js"
import { connectDB } from "./config/db.js";


const app=express();
const port=process.env.PORT || 5001

app.use(express.json())

app.get("/", (req, res) => {
  res.send("🚀 Notes API is running! Try /api/notes");
});

app.use("/api/notes",routeNotes)



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