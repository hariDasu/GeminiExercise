import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { GenericButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

export const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const transactionHistory = useSelector(
    (state) => state.account.transactionHistory
  );
  const [address, setAddress] = useState("");
  const signInDisabled = address === "";

  const fetchTransactionHistory = useCallback(() => {
    dispatch(actions.getTransactionsRequest(address));
    return navigation.navigate("TransactionHistory", { transactionHistory });
  }, [dispatch, address, navigation, transactionHistory]);

  return (
    <View style={styles.containerStyle}>
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="Enter address"
        keyboardType="default"
        testID={"addressField"}
      />
      <GenericButton
        onPress={fetchTransactionHistory}
        disabled={signInDisabled}
        title="Sign in..."
        testID={"signInButton"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 300,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    height: 40,
    width: "60%",
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
});
