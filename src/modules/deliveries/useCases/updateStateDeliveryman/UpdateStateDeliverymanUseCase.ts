import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { IUpdateStateDeliveryman } from '../../dtos/IUpdateStateDeliverymanDTO';

export class UpdateStateDeliverymanUseCase {
  async execute(data: IUpdateStateDeliveryman): Promise<Deliveries> {
    const { deliveryManId, itemId } = data;

    const delivery = await prisma.deliveries.update({
      where: {
        id: itemId,
      },
      data: {
        deliveryManId,
      },
    });
    return delivery;
  }
}
