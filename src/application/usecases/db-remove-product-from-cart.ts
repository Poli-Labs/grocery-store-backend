import { GetShoppingEventByIdRepository, UpdateShoppingEventRepository } from '../contracts';

import {
  Either,
  left,
  ProductNotFoundError,
  RemoveProductFromCart,
  RemoveProductFromCartErrors,
  RemoveProductFromCartParams,
  right,
  ShoppingEventNotFoundError,
  UnexpectedError,
} from '@/domain';

type RemoveProductFromCartRepositories = GetShoppingEventByIdRepository &
  UpdateShoppingEventRepository;

export class DbRemoveProductFromCart implements RemoveProductFromCart {
  constructor(private readonly repository: RemoveProductFromCartRepositories) {}

  execute = async ({
    shoppingEventId,
    productId,
  }: RemoveProductFromCartParams): Promise<Either<RemoveProductFromCartErrors, void>> => {
    try {
      // Get shoppingEvent by ID
      const shoppingEvent = await this.repository.getById({
        shoppingEventId,
      });

      // Return ShoppingEventNotFoundError if shoppingEvent is undefined
      if (!shoppingEvent) {
        return left(new ShoppingEventNotFoundError());
      }

      // Retrieve Product from shoppingEvent
      const product = shoppingEvent.products.getItemById(productId);

      // Return ProductNotFoundError if no product is found
      if (!product) {
        return left(new ProductNotFoundError());
      }

      // remove the product from the list
      shoppingEvent.products.remove(product);

      // Update shoppingEvent (removing the produt) to the database
      await this.repository.update(shoppingEvent);

      // Return right void
      return right(undefined);
    } catch (error) {
      console.error(error);

      return left(new UnexpectedError());
    }
  };
}
