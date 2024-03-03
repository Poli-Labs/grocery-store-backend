import { mockRepositories } from 'tests/mocks/repositories';

import {
  CountShoppingEventListRepositoryParams,
  DbGetShoppingEventList,
  GetShoppingEventListRepository,
} from '@/application';
import { GetShoppingEventList, GetShoppingEventListParams } from '@/domain';

interface SutResult {
  sut: GetShoppingEventList;
  mockedShoppingEventRepository: GetShoppingEventListRepository;
}

export const makeSut = (): SutResult => {
  const { mockedShoppingEventRepository } = mockRepositories();

  const sut = new DbGetShoppingEventList(mockedShoppingEventRepository);

  return {
    sut,
    mockedShoppingEventRepository,
  };
};

interface MockEndShoppingEventData {
  params: GetShoppingEventListParams;
  repositoryParams: CountShoppingEventListRepositoryParams;
}

export const mockEndShoppingEventData = (): MockEndShoppingEventData => {
  const params: GetShoppingEventListParams = {
    pageIndex: 0,
    pageSize: 20,
    orderBy: 'createdAt',
    orderDirection: 'asc',
  };

  const repositoryParams: CountShoppingEventListRepositoryParams = {
    status: undefined,
    period: undefined,
  };

  return { params, repositoryParams };
};
