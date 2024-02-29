import { ShoppingEvent } from '@/domain';

export interface UpdateShoppingEventRepository {
  update: (shoppingEvent: ShoppingEvent) => Promise<void>;
}
