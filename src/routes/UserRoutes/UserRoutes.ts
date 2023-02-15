import { Router } from 'express';
import UserController from '../../controllers/UserController/UserController';

const UserRoutes = Router();

UserRoutes.post("", UserController.create)

UserRoutes.get("", UserController.findAll)

export{ UserRoutes };
