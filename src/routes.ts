import { Router } from 'express';

import { AuthenticateClientController } from './modules/clients/useCases/authenticateClients/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/clients', createClientController.handle);
routes.post('/clients/auth', authenticateClientController.handle);

export { routes };
