import { Request, Response } from "express";
import { route, GET } from 'awilix-express' // or `awilix-router-core`

@route('/')
export default class DefaultController {
    @GET()
    async index(req: Request, res: Response) {
        res.send({
            app: process.env.APP_NAME,
            environment: process.env.NODE_ENV
        });
    }
}