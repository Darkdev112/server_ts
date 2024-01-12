import express,{ Express, Request, Response } from "express";
import cors,{CorsOptions} from 'cors'
import {config} from "./config/config"
import { successHandler, errorHandler } from "./config/morgan";
import { testRouter } from "./app/routes";

const appLoader = async (app : Express) => {
    app.get('/',(req : Request, res : Response) => {
        res.status(200).end()
    })
    app.head('/',(req : Request, res : Response) => {
        res.status(200).end()
    })

    const corsOptions : CorsOptions = {
        origin : config.client_url
    }

    if(config.mode !== "test"){
        app.use(successHandler);
        app.use(errorHandler);
    }

    app.use(express.json())
    app.use(express.urlencoded({extended : true}))
    app.use(cors(corsOptions));

    app.use(testRouter)
}

export default appLoader