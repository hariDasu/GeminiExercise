import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { SignInScreen } from "./SignInScreen";
import rootReducer from "../reducers";
import { initialAccountState } from "../reducers/accountReducer";
import { act } from "react-test-renderer";

jest.mock("react-native-chart-kit", () => {});
jest.mock("react-native-gesture-handler", () => {});

function SignInComponent() {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: { account: initialAccountState },
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SignInScreen />;
      </Provider>
    </NavigationContainer>
  );
}
describe("SignIn", () => {
  test("Renders correctly", () => {
    const { toJSON } = render(<SignInComponent />);
    expect(toJSON()).toMatchSnapshot();
  });
  test("Navigates to transaction history", async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <SignInComponent navigation={{ navigate }} />
    );
    const addressInput = getByTestId("addressField");
    await act(async () => {
      await waitFor(() => {
        fireEvent.changeText(getByTestId("addressField"), "Henry");
      });
      expect(addressInput.props.value).toBe("Henry");
    });
    //TODO: properly initialize react navigation mocking with redux
    // fireEvent(getByTestId("signInButton"), "press");
    // expect(navigate).toHaveBeenCalledWith("TransactionHistory");
  });
});
