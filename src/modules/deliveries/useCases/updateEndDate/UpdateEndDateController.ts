import { Request, Response } from 'express';

import { UpdateEndDateUseCase } from './UpdateEndDateUseCase';

export class UpdateEndDateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: deliveriesId } = req.params;
    const { id: deliverymanId } = req.user;

    const updateEndDateController = new UpdateEndDateUseCase();
    const result = await updateEndDateController.execute({
      deliveriesId,
      deliverymanId,
    });

    return res.json(result);
  }
}
