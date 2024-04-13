import connectDB from "./db/index.js"
import "dotenv/config";
const port = process.env.PORT || 8000;
import {app} from "./app.js"
connectDB()
.then(()=>{
      app.listen(port,()=>console.log(`Server is listening...${port}`));
})
.catch((error) => {
      console.log("DATABASE ERROR ARISES : ", error)
});