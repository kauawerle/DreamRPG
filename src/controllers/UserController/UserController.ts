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

	async findByEmail(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password } = req.query;

			if (!email || email === '') {
				const response = {
					message: 'É necessário informar um Email.'
				}
				res.status(401).send(response)
				return next(response)
			}

			if (!password || password === '') {
				const response = {
					message: 'É necessário informar uma Senha.'
				}
				res.status(401).send(response)
				return next(response)
			}
			UserModel.findOne({ where: { email: email, password: password } })
				.then((result) => {
					const response = {
						message: 'Acesso não autorizado!, verifique seus dados e tente novamente'
					}
					result ?
						res.status(200).json(result)
						:
						res.status(401).send(response)
					return next(response)

				});
		} catch (err) {
			throw err
		}
	}

	async update(req: Request, res: Response) {
		try {
			const {
				name,
				email,
				password
			} = req.query;

			await UserModel.update({
				name,
				email,
				password
			}, {
				where: {
					id: req.params.id
				}
			}).then(result => {
				res.status(200).json(result)
			});

		} catch (err) {
			return res.status(500).json(err);

		}
	}
	async destroy(req: Request, res: Response) {
		try {
			await UserModel.destroy({
				where: {
					id: req.params.id
				}
			}).then(result => {
				res.status(200).json({ result: 'deletado' });
			})
		} catch (err) {
			return res.status(500).json(err);
		}
	}
}
export default new UserController();
