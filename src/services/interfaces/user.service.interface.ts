import User from "../../models/user.model";

export default interface IUserService {
    getAll(): Promise<Array<User>>;
    find(id: string): Promise<User>;
}