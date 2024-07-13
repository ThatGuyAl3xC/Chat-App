import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"; 
import messageRoutes from "./routes/message.routes.js"; 
import usesrRoutes from "./routes/user.routes.js"; 

import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000;
 
dotenv.config();

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes); 
app.use("/api/users", usesrRoutes); 



// app.get("/", (req, res) => {
//     res.send("Hello I am ALIVEEEE!!!!!!!")
// })  


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});