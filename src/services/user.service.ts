import User from "../models/user.model";
import IUserService from "./interfaces/user.service.interface";

export default class UserService implements IUserService {
    public async getAll(): Promise<Array<User>> {
        return [
            { id: "asdwoSwpds", name: "Eduardo" },
            { id: "asd34S392W", name: "Carla" }
        ];
    }

    public async find(id: string): Promise<User> {
        return {
            id: "asdawd",
            name: "Eduardo"
        };
    }
}