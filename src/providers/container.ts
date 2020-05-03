import { createContainer, InjectionMode, asClass } from "awilix";

import DefaultController from "../controllers/default.controller";
import UserService from "../services/user.service";
import UserController from "../controllers/user.controller";

const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
});

// controllers
container.register({
    defaultController: asClass(DefaultController),
    userController: asClass(UserController),
    userService: asClass(UserService)
});

export default container;