import { Prisma } from '@prisma/client';

import { Product } from '@/domain';

type ProductCreatePersistence = Prisma.productCreateInput;

export class ProductMapper {
  static toCreatePersistence(product: Product): ProductCreatePersistence {
    const persistence: ProductCreatePersistence = {
      id: product.id,
      shoppingEvent: {
        connect: {
          id: product.shoppingEventId,
        },
      },
      name: product.name,
      amount: product.amount,
      wholesaleAmount: product.wholesaleMinAmount,
      price: product.price,
      wholesalePrice: product.wholesalePrice,
      addedAt: product.addedAt,
      addedBy: product.addedBy,
    };
    return persistence;
  }
}