import React, { forwardRef, useCallback, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Modalize } from "react-native-modalize";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

import { GenericButton } from ".";

export const SendWidget = forwardRef(({ navigation }, modalizeRef) => {
  const dispatch = useDispatch();
  const fromAddress = useSelector((state) => state.account.fromAddress);
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const sendDisabled = toAddress === "" || amount === "";

  const sendJobcoinsToAddress = useCallback(() => {
    dispatch(actions.sendJobcoinsRequest(fromAddress, toAddress, amount));
    return modalizeRef.current?.close();
  }, [amount, dispatch, fromAddress, modalizeRef, toAddress]);

  {
    return (
      <Modalize ref={modalizeRef} adjustToContentHeight>
        <View style={styles.containerStyle}>
          <TextInput
            style={styles.input}
            onChangeText={setToAddress}
            value={toAddress}
            placeholder="Enter address to send to"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={setAmount}
            value={amount}
            placeholder="Enter amount to send"
            keyboardType="numeric"
          />
          <GenericButton
            onPress={sendJobcoinsToAddress}
            disabled={sendDisabled}
            title="Send Jobcoin"
          />
        </View>
      </Modalize>
    );
  }
});

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
