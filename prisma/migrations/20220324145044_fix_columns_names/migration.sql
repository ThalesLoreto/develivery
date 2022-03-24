/*
  Warnings:

  - You are about to drop the column `clientId` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryManId` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the column `itemName` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryman_id` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_name` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_clientId_fkey";

-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_deliveryManId_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "clientId",
DROP COLUMN "deliveryManId",
DROP COLUMN "itemName",
ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "deliveryman_id" TEXT NOT NULL,
ADD COLUMN     "item_name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
