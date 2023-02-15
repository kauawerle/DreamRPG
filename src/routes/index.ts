import { Router } from 'express';

import {UserRoutes} from './UserRoutes/UserRoutes';

const routes = Router();

routes.use('/user', UserRoutes);

export { routes }
