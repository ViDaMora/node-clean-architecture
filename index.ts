'use strict';

import {createServer} from './src/infraestructure/server/server'
import {connectDB} from './src/infraestructure/db/mongoose/mongoose'

const start =async () => {
    try {
        await connectDB()
        await createServer()
    }
    catch (err) {
        console.log(err);
        process.exit(1);
      }
}


start()