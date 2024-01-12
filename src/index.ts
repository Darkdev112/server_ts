import express,{Express} from 'express'
import appLoader from "./app";
import { config } from './config/config';

const startServer = async () => {
    const app : Express = express()
    await appLoader(app)

    const server = app.listen(config.port,() => {
        console.log(`Server up on port ${config.port}`)
    })

    const unexpectedErrorHandler = async (error : Error) => {
        console.log(error)
        if(server){
            server.close(() => {
                console.log("Server Closed");
                process.exit(1);
            })
        }
        else{
            process.exit(1)
        }
    }

    process.on("uncaughtException", unexpectedErrorHandler)
    process.on("unhandledRejection", unexpectedErrorHandler)
    process.on("SIGTERM", unexpectedErrorHandler)
    process.on("SIGINT", unexpectedErrorHandler)
}

startServer()