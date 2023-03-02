import { Router } from 'express';
import { TestRoutes } from './TestResistenceRoutes/TestResistenceRoutes';

import {UserRoutes} from './UserRoutes/UserRoutes';

const routes = Router();

routes.use('/user', UserRoutes);
routes.use('/testResistence', TestRoutes);

export { routes }
