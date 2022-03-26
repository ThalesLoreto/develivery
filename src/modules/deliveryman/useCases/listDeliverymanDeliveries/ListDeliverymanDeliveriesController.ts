import { Request, Response } from 'express';

import { ListDeliverymanDeliveriesUseCase } from './ListDeliverymanDeliveriesUseCase';

export class ListDeliverymanDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: deliverymanId } = req.user;

    const listDeliverymanDeliveriesUseCase =
      new ListDeliverymanDeliveriesUseCase();
    const result = await listDeliverymanDeliveriesUseCase.execute(
      deliverymanId,
    );

    return res.json(result);
  }
}
