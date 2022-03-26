import { Request, Response } from 'express';

import { ListClientDeliveriesUseCase } from './ListClientDeliveriesUseCase';

export class ListClientDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: clientId } = req.user;

    const listClientDeliveriesUseCase = new ListClientDeliveriesUseCase();
    const result = await listClientDeliveriesUseCase.execute(clientId);
    return res.json(result);
  }
}
