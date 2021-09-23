import * as types from "../types";

export const initialAccountState = {
  transactionHistory: {},
  fromAddress: "",
  balance: 0,
  success: null,
  error: null,
  isLoading: null,
};

export const account = (state = initialAccountState, action) => {
  switch (action.type) {
    case types.accountTypes.ACCOUNT_HISTORY_REQUEST:
      return {
        ...state,
        fromAddress: action.address,
        success: false,
        error: false,
        isLoading: true,
      };
    case types.accountTypes.ACCOUNT_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        error: false,
        transactionHistory: action.transactions,
        balance: action.balance,
      };

    case types.accountTypes.ACCOUNT_HISTORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
      };

    default:
      return state;
  }
};
