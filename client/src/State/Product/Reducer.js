import {
  FIND_PRODUCT_BY_REQUEST,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_SUCCESS,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_FAILURE,
  FIND_PRODUCT_BY_ID_FAILURE,
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};
export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT_BY_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case FIND_PRODUCT_BY_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, product: action.payload, loading: false, error: null };
    case FIND_PRODUCT_BY_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
