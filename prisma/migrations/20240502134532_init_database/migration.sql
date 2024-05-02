/*
  Warnings:

  - You are about to drop the column `deliveryTime` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to alter the column `deliveryFee` on the `Restaurant` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - Added the required column `deliveryTimeMinutes` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "deliveryTime",
ADD COLUMN     "deliveryTimeMinutes" INTEGER NOT NULL,
ALTER COLUMN "deliveryFee" SET DATA TYPE DECIMAL(10,2);
