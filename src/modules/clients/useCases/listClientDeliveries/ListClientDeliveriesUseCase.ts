import { Deliveries } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';

interface IClientResponse {
  id: string;
  username: string;
  deliveries: Deliveries[];
}

export class ListClientDeliveriesUseCase {
  async execute(clientId: string): Promise<IClientResponse> {
    const client = await prisma.clients.findFirst({
      where: {
        id: clientId,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });
    if (!client) {
      throw new Error('Client not exists.');
    }

    return client;
  }
}
