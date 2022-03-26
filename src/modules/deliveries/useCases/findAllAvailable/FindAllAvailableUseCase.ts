import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';

export class FindAllAvailableUseCase {
  async execute(): Promise<Deliveries[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        endAt: null,
        deliveryManId: null,
      },
    });

    return deliveries;
  }
}
