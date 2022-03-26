import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { IUpdateEndDateDTO } from '../../dtos/IUpdateEndDateDTO';

export class UpdateEndDateUseCase {
  async execute(data: IUpdateEndDateDTO): Promise<Deliveries> {
    const { deliveriesId, deliverymanId } = data;

    const delivery = await prisma.deliveries.update({
      where: {
        link_delivery_deliveryman: {
          id: deliveriesId,
          deliveryManId: deliverymanId,
        },
      },
      data: {
        endAt: new Date(),
      },
    });
    return delivery;
  }
}
