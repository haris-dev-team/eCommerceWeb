import { api } from "../../config/Apis/apiConfig";
import { store } from "../store";
import {
  FIND_PRODUCT_BY_FAILURE,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_REQUEST,
  FIND_PRODUCT_BY_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_REQUEST });

  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } = await api.get(
      `/api/products?category=${category}&color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&discount=${minDiscount}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}&sort=${sort}`
    );
    dispatch({ type: FIND_PRODUCT_BY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  const { productId } = reqData;
  console.log("productId =-- ", productId);
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("id --- ", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
