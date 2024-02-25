import { Either } from '../core';
import { ShoppingEvent } from '../entities';

import { UnexpectedError } from './errors';

export type StartShoppingEventErrors = UnexpectedError;

export interface StartShoppingEventParams {
  marketId: string;
}

export interface StartShoppingEvent {
  execute: (
    params: StartShoppingEventParams,
  ) => Promise<Either<StartShoppingEventErrors, ShoppingEvent>>;
}