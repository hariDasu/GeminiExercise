import axios from "axios";
import { HttpUtils } from "../utilities/";

export class AccountService {
  static fetchTransactionHistory = async (address) => {
    return await axios
      .get(`https://jobcoin.gemini.com/bankbook-brick/api/addresses/${address}`)
      .then(HttpUtils.handleResponse);
  };

  static sendJobcoins = async (fromAddress, toAddress, amount) => {
    const transaction = { fromAddress, toAddress, amount };
    return await axios
      .post(
        "https://jobcoin.gemini.com/bankbook-brick/api/transactions",
        transaction
      )
      .then(HttpUtils.handleResponse);
  };
}
