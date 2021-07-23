import express from 'express';
import {router} from './routes/StudentRoute'
//const router= require('./routes/StudentRoute')
export const createServer = async()=>{

    const PORT = process.env.PORT || 3000;

    const app = express();
    app.use(express.json())

    //RUTAS
    app.use('/',router)

    app.listen(PORT,()=> console.log("Server started on port: " +PORT))

}





