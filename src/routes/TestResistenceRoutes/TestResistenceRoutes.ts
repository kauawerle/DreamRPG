import { Router } from 'express';
import TestResistenceController from '../../controllers/TestResistenceController/TestResistenceController';

const TestRoutes = Router();

TestRoutes.post("", TestResistenceController.create)

TestRoutes.get("", TestResistenceController.findAll)


// UserRoutes.put("/:id", TestResistenceController.update)

// UserRoutes.delete("/:id", TestResistenceController.destroy)

export{ TestRoutes };
