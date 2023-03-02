import { Request, Response, NextFunction } from "express";
import { v4 } from "uuid";

import { TestResistenceModel } from "../../database/model/tb_teste_resistencia";

class TestResistenceController {
	async findAll(req: Request, res: Response) {
		try {
			const tests_resistences =
				await TestResistenceModel.findAll();

			res.json(tests_resistences);
		}
		catch (err) {
			return res.status(500).json(err);
		}
	}

	async create(req: Request, res: Response) {
		try {
			const {
				strength,
				intelligence,
				dexterity,
				wisdom,
				constitution,
				charisma,
				initiative,
			} = req.query;

			const tests_resistences =
				await TestResistenceModel.create({
					id: v4(),
					strength,
					intelligence,
					dexterity,
					wisdom,
					constitution,
					charisma,
					initiative
				});

			return res
				.status(201)
				.json(tests_resistences);
		}
		catch (err) {
			return res
				.status(500)
				.json(err);
		}
	}

}

export default new TestResistenceController();
