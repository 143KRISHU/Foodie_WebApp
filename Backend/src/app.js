import express from "express"
import cors from "cors";
import cookieeParser from "cookie-parser";
const app = express()
import path from "path"
import ejsMate from "ejs-mate"

//cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname,"/public")))
// app.set("viee engine","ejs")
// app.set("views",path.join(__dirname,"/views"));
app.use(cookieeParser())



export {app};