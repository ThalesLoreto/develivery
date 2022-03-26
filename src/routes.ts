import { Router } from 'express';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClients/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { ListClientDeliveriesController } from './modules/clients/useCases/listClientDeliveries/ListClientDeliveriesController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateStateDeliverymanController } from './modules/deliveries/useCases/updateStateDeliveryman/UpdateStateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { ListDeliverymanDeliveriesController } from './modules/deliveryman/useCases/listDeliverymanDeliveries/ListDeliverymanDeliveriesController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateStateDeliverymanController = new UpdateStateDeliverymanController();
const listClientDeliveriesController = new ListClientDeliveriesController();
const listDeliverymanDeliveriesController =
  new ListDeliverymanDeliveriesController();

routes.post('/clients', createClientController.handle);
routes.post('/clients/auth', authenticateClientController.handle);
routes.get(
  '/clients/deliveries',
  ensureAuthenticated,
  listClientDeliveriesController.handle,
);

routes.post('/deliveryman', createDeliverymanController.handle);
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle);
routes.get(
  '/deliveryman/deliveries',
  ensureAuthenticated,
  listDeliverymanDeliveriesController.handle,
);

routes.post(
  '/deliveries',
  ensureAuthenticated,
  createDeliveryController.handle,
);
routes.get(
  '/deliveries',
  ensureAuthenticated,
  findAllAvailableController.handle,
);
routes.put(
  '/deliveries/:id',
  ensureAuthenticated,
  updateStateDeliverymanController.handle,
);

export { routes };
