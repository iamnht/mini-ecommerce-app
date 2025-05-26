import axios from "axios";
import { PRODUCT_API, CART_ITEM_API } from "../constants/productApi";

export const fetchProducts = async () => {
  const response = await axios.get(
    `${PRODUCT_API.BASE_URL}${PRODUCT_API.ENDPOINTS.GET_ALL}`
  );
  return response.data;
};
