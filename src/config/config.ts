import dotenv from "dotenv"
import path from "path"

export interface configType{
    mode : string 
    port : number
    client_url : string
}

const env = dotenv.config({path : path.join(__dirname, '../../.env')})

if(env.error){
    throw new Error("No .env file found ")
}

export const config : configType =  {
    mode : process.env.NODE_ENV as string,
    port : parseInt(process.env.PORT as string , 10),
    client_url : process.env.CLIENT_URL as string
}