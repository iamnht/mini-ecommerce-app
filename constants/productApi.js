export const PRODUCT_API = {
  BASE_URL: 'https://fakestoreapi.com/products',
  ENDPOINTS: {
    GET_ALL: '/',
    GET_BY_ID: (id) => `/detail/${id}`,
  },
};

export const CART_ITEM_API = {
  BASE_URL: 'https://fakestoreapi.com/carts',
  ENDPOINTS: {
    GET_ALL: ''
  }
}