export const injection = {
  infra: {
    marketRepositories: 'market-repositories',
    shoppingEventRepositories: 'shopping-event-repositories',
    productRepositories: 'product-repositories',
  },
  usecases: {
    newMarket: 'new-market-usecase',
    updateMarket: 'update-market-usecase',
    getMarketList: 'get-market-list-usecase',
    startShoppingEvent: 'start-shopping-event-usecase',
    endShoppingEvent: 'end-shopping-event-usecase',
    getShoppingEventList: 'get-shopping-event-list-usecase',
    getShoppingEventById: 'get-shopping-event-by-id-usecase',
    addProductToCart: 'add-product-to-cart-usecase',
    updateProductInCart: 'update-product-in-cart-usecase',
    removeProductFromCart: 'remove-product-from-cart-usecase',
  },
  controllers: {
    newMarket: 'new-market-controller',
    updateMarket: 'update-market-controller',
    getMarketList: 'get-market-list-controller',
    startShoppingEvent: 'start-shopping-event-controller',
    endShoppingEvent: 'end-shopping-event-controller',
    getShoppingEventList: 'get-shopping-event-list-controller',
    getShoppingEventById: 'get-shopping-event-by-id-controller',
    addProductToCart: 'add-product-to-cart-controller',
    updateProductInCart: 'update-product-in-cart-controller',
    removeProductFromCart: 'remove-product-from-cart-usecase',
  },
};
