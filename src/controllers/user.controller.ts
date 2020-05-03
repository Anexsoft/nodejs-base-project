import { Request, Response } from "express";
import IUserService from "../services/interfaces/user.service.interface";
import { route, GET, POST, before, DELETE } from 'awilix-express' // or `awilix-router-core`

@route('/users')
export default class UserController {
    constructor(private userService: IUserService) {

    }

    @GET()
    async getAll(req: Request, res: Response) {
        res.send(await this.userService.getAll());
    }

    @route("/:id")
    @GET()
    async find(req: Request, res: Response) {
        res.send(await this.userService.find(req.params.id));
    }

    @route("/:id")
    @DELETE()
    async remove(req: Request, res: Response) {
        //  ToDo
    }
}