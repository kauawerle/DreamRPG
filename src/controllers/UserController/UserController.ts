import { Request, Response, NextFunction } from "express";
import { v4 } from "uuid";

import { UserModel } from "../../database/model/tb_user";

class UserController {
    async findAll(req: Request, res: Response) {
        try {
            const users = await UserModel.findAll();
            res.json(users);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }

    async create(req: Request, res: Response) {
		try {
			const {
				name,
				email,
				password
			} = req.query;

			const user = await UserModel.create({
				id: v4(),
				name,
				email,
				password,
			});

			return res.status(201).json(user);
		}
		catch (err) {
			console.log(err)
			return res.status(500).json(err);
		}
	}
    
}
export default new UserController();
