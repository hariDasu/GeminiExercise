import { put, call } from "redux-saga/effects";
import { AccountService } from "../services";
import * as types from "../types";

export function getTransactionsRequest(address) {
  return {
    type: types.accountTypes.ACCOUNT_HISTORY_REQUEST,
    address,
  };
}

export function* getTransactionHistory({ address }) {
  try {
    const { balance, transactions } = yield call(
      AccountService.fetchTransactionHistory,
      address
    );
    const sortedTransactions = transactions.sort((a, b) =>
      new Date(b.timestamp) > new Date(a.timestamp) ? -1 : 1
    );
    yield put({
      type: types.accountTypes.ACCOUNT_HISTORY_SUCCESS,
      transactions: sortedTransactions,
      balance,
    });
  } catch (error) {
    yield put({
      type: types.accountTypes.ACCOUNT_HISTORY_FAILURE,
      error,
    });
  }
}

export function sendJobcoinsRequest(fromAddress, toAddress, amount) {
  return {
    type: types.accountTypes.SEND_COIN_REQUEST,
    fromAddress,
    toAddress,
    amount,
  };
}

export function* sendJobcoinsToAddress({ fromAddress, toAddress, amount }) {
  try {
    const { status } = yield call(
      AccountService.sendJobcoins,
      fromAddress,
      toAddress,
      amount
    );
    yield put({
      type: types.accountTypes.SEND_COIN_SUCCESS,
      status,
    });
    yield put({
      type: types.accountTypes.ACCOUNT_HISTORY_REQUEST,
      address: fromAddress,
    });
  } catch (error) {
    yield put({
      type: types.accountTypes.SEND_COIN_FAILURE,
      error,
    });
  }
}
