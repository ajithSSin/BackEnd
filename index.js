import express from "express"   // IMPORTING EXPRES LIBRARY

import dotenv from "dotenv"  // 

dotenv.config() // 

const app=express();

// app.listen(8000,()=>{
//     console.log("Server is listenening to port no:8000");
// })

/**/

app.listen(process.env.PORT,()=>{
    console.log(`Server is listenening to port ${process.env.PORT}`);
})