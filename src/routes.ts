import { Router } from 'express';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClients/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { AuthenticateDeliverymanController } from './modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post('/clients', createClientController.handle);
routes.post('/clients/auth', authenticateClientController.handle);

routes.post('/deliveryman', createDeliverymanController.handle);
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle);

routes.post(
  '/deliveries',
  ensureAuthenticated,
  createDeliveryController.handle,
);

export { routes };
