export class HttpUtils {
  static handleResponse(responseData) {
    const { data, status, statusText } = responseData;
    if (status >= 200 && status < 300) {
      return data;
    } else {
      const errors = { error: status, errorText: statusText };
      return Promise.reject(errors);
    }
  }
}
