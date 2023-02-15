import { Router } from 'express';
import UserController from '../../controllers/UserController/UserController';

const UserRoutes = Router();

UserRoutes.post("", UserController.create)

UserRoutes.get("", UserController.findAll)

UserRoutes.get("/authent/", UserController.findByEmail)

UserRoutes.put("/:id", UserController.update)

UserRoutes.delete("/:id", UserController.destroy)

export{ UserRoutes };
