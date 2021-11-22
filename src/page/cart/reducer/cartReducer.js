import * as types from "../actions/types";

const initialState = {
    statusAdd: false,
    finished: true,
    cartList: [],
    sumMoney: 0,
    countList: 0,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_ADD_CART:
            return {
                ...state,
                statusAdd: action.status,
                finished: false,
            };
        case types.FINISH_ADD_CART:
            return {
                ...state,
                statusAdd: false,
                finished: action.status,
            };
        case types.ADD_CART_SUCCESS:
            const detailPd = action.data;
            const detailPdInCart = [...state.cartList].find(
                (item) => item.id === detailPd.id
            );

            if (state.cartList.length === 0) {
                detailPd.qty = 1;
                return {
                    ...state,
                    cartList: [...state.cartList, detailPd],
                    sumMoney:
                        parseInt(state.sumMoney) + parseInt(detailPd.price),
                    countList: state.countList + 1,
                    error: null,
                };
            } else {
                if (detailPdInCart) {
                    detailPdInCart.qty += 1;

                    return {
                        ...state,
                        sumMoney:
                            parseInt(state.sumMoney) +
                            parseInt(detailPdInCart.price),
                        countList: state.countList,
                        error: null,
                    };
                } else {
                    detailPd.qty = 1;
                    return {
                        ...state,
                        cartList: [...state.cartList, detailPd],
                        sumMoney:
                            parseInt(state.sumMoney) + parseInt(detailPd.price),
                        countList: state.countList + 1,
                        error: null,
                    };
                }
            }

        case types.ADD_CART_FAILED:
            return {
                ...state,
                cartList: [],
                error: action.error,
            };
        case types.DELETE_ITEM_CART:
            const itemDelete = state.cartList.find(
                (item) => item.id === action.id
            );

            const newCartList = [...state.cartList].filter(
                (item) => item.id !== action.id
            );

            return {
                ...state,
                cartList: newCartList,
                sumMoney:
                    parseInt(state.sumMoney) -
                    parseInt(itemDelete.price * itemDelete.qty),
                countList: state.countList - 1,
            };
        case types.CHANGE_QTY_CART:
            const newCart = [...state.cartList].map((item) => {
                return item.id === action.id
                    ? {
                          ...item,
                          qty: action.qty,
                      }
                    : item;
            });

            const newSumMoney = newCart
                .map((item) => item.price * item.qty)
                .reduce((prev, current) => prev + current);

            return {
                ...state,
                cartList: newCart,
                sumMoney: newSumMoney,
            };

        default:
            return state;
    }
};

export default cartReducer;
