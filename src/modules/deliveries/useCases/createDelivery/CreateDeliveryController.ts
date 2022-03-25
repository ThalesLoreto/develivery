import { Request, Response } from 'express';

import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: clientId } = req.user;
    const { item_name: itemName } = req.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const result = await createDeliveryUseCase.execute({ itemName, clientId });

    return res.status(201).json(result);
  }
}
