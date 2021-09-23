import { all, takeLatest } from "redux-saga/effects";
import * as types from "../types";
import * as actions from "../actions";

export function* getTransactionsWatcher() {
  yield takeLatest(
    types.accountTypes.ACCOUNT_HISTORY_REQUEST,
    actions.getTransactionHistory
  );
}

export function* sendJobcoinsWatcher() {
  yield takeLatest(
    types.accountTypes.SEND_COIN_REQUEST,
    actions.sendJobcoinsToAddress
  );
}

export default function* root() {
  yield all([getTransactionsWatcher(), sendJobcoinsWatcher()]);
}
