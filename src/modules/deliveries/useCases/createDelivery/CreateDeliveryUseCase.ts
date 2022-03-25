import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { ICreateDeliveryDTO } from '../../dtos/ICreateDeliveryDTO';

export class CreateDeliveryUseCase {
  async execute(data: ICreateDeliveryDTO): Promise<Deliveries> {
    const { itemName, clientId } = data;

    const delivery = await prisma.deliveries.create({
      data: {
        itemName,
        clientId,
      },
    });
    return delivery;
  }
}
