import * as types from "../actions/types";

const initialState = {
    loading: false,
    products: {
        featured: [],
        latest: [],
        topSelling: [],
    },
    error: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_GET_DATA_PRODUCTS:
            return {
                ...state,
                loading: action.loading,
            };
        case types.STOP_GET_DATA_PRODUCTS:
            return {
                ...state,
                loading: action.loading,
            };
        case types.GET_DATA_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: {
                    featured: action.products.featured,
                    latest: action.products.latest,
                    topSelling: action.products.top_selling,
                },
                error: null,
            };
        case types.GET_DATA_PRODUCTS_FAILED:
            return {
                ...state,
                products: [],
                error: action.error,
            };
        default:
            return state;
    }
};

export default productsReducer;
