import { Router, Request, Response } from "express";

const router = Router()

router.get('/hello/:name', (req : Request, res:Response) => {
    const {name} = req.params;

    if(!name){
        return res.status(404).send('Params not found')
    }

    res.status(200).send(`Hello ${name}`)
})

export const testRouter = router