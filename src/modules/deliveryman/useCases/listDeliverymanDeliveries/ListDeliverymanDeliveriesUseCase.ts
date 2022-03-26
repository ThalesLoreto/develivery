import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';

interface IDeliverymanResponse {
  id: string;
  username: string;
  deliveries: Deliveries[];
}

export class ListDeliverymanDeliveriesUseCase {
  async execute(deliverymanId: string): Promise<IDeliverymanResponse> {
    const deliveryman = await prisma.deliveryMan.findFirst({
      where: {
        id: deliverymanId,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });
    if (!deliveryman) {
      throw new Error('User does not exist.');
    }

    return deliveryman;
  }
}
