import 'reflect-metadata';

import { databaseError } from 'tests/mocks/errors';
import * as mockDate from 'mockdate';

import { makeSut, mockEndShoppingEventData } from './mocks';

import { left, right, UnexpectedError } from '@/domain';

describe('GetShoppingEventList', () => {
  beforeAll(() => {
    mockDate.set(new Date());
  });

  afterAll(() => {
    mockDate.reset();
  });
  it('shoud call GetShoppingEventListRepository.count with the correct values', async () => {
    // Arrange
    const { sut, mockedShoppingEventRepository } = makeSut();

    const shoppingEventRepositorySpy = vi.spyOn(mockedShoppingEventRepository, 'count');

    const { params, repositoryParams } = mockEndShoppingEventData();

    // Act
    await sut.execute(params);

    // Assert
    expect(shoppingEventRepositorySpy).toHaveBeenCalledWith(repositoryParams);
  });

  it('shoud return UnexpectedError if GetShoppingEventListRepository.count throws', async () => {
    // Arrange
    const { sut, mockedShoppingEventRepository } = makeSut();

    vi.spyOn(mockedShoppingEventRepository, 'count').mockImplementationOnce(databaseError);

    const { params } = mockEndShoppingEventData();

    // Act
    const response = await sut.execute(params);

    // Assert
    expect(response).toEqual(left(new UnexpectedError()));
  });

  it('shoud return the list with an empty array if GetShoppingEventListRepository.count returns 0', async () => {
    // Arrange
    const { sut, mockedShoppingEventRepository } = makeSut();

    vi.spyOn(mockedShoppingEventRepository, 'count').mockResolvedValueOnce(0);

    const { params, emptyResponse } = mockEndShoppingEventData();

    // Act
    const response = await sut.execute(params);

    // Assert
    expect(response).toEqual(right(emptyResponse));
  });

  it('shoud call GetShoppingEventListRepository.getAll with the correct values', async () => {
    // Arrange
    const { sut, mockedShoppingEventRepository } = makeSut();

    const shoppingEventRepositorySpy = vi.spyOn(mockedShoppingEventRepository, 'getAll');

    const { params } = mockEndShoppingEventData();

    // Act
    await sut.execute(params);

    // Assert
    expect(shoppingEventRepositorySpy).toHaveBeenCalledWith(params);
  });

  it('shoud return UnexpectedError if GetShoppingEventListRepository.getAll throws', async () => {
    // Arrange
    const { sut, mockedShoppingEventRepository } = makeSut();

    vi.spyOn(mockedShoppingEventRepository, 'getAll').mockImplementationOnce(databaseError);

    const { params } = mockEndShoppingEventData();

    // Act
    const response = await sut.execute(params);

    // Assert
    expect(response).toEqual(left(new UnexpectedError()));
  });

  it.todo('shoud return the fetched list on success', async () => {
    // Arrange
    const { sut } = makeSut();

    const { params, successResponse } = mockEndShoppingEventData();

    // Act
    const response = await sut.execute(params);

    // Assert
    expect(response).toEqual(right(successResponse));
  });
});
