import { Request, Response } from 'express';

import { UpdateStateDeliverymanUseCase } from './UpdateStateDeliverymanUseCase';

export class UpdateStateDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: itemId } = req.params;
    const { id: deliveryManId } = req.user;

    const updateStateDeliverymanUseCase = new UpdateStateDeliverymanUseCase();
    const result = await updateStateDeliverymanUseCase.execute({
      itemId,
      deliveryManId,
    });

    return res.json(result);
  }
}
