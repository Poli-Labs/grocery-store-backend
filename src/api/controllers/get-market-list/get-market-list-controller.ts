import { z } from 'zod';
import { inject, injectable } from 'tsyringe';

import { getMarketListRequestSchema } from './get-market-list-controller-validation-schema';

import { Controller, HttpResponse } from '@/api/contracts';
import { GetMarketList } from '@/domain';
import { injection } from '@/main/di';
import { ok } from '@/api/helpers';

type GetMarketListControllerRequest = z.infer<typeof getMarketListRequestSchema>;

const { usecases } = injection;

@injectable()
export class GetMarketListController implements Controller {
  constructor(@inject(usecases.getMarketList) private readonly getMarketList: GetMarketList) {}
  handle = async ({
    search,
    pageIndex,
    pageSize,
    orderBy,
    orderDirection,
  }: GetMarketListControllerRequest): Promise<HttpResponse> => {
    return await Promise.resolve(ok({}));
  };
}
