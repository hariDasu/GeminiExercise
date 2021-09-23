import React, { useRef } from "react";
import { Button, Keyboard, StyleSheet, View } from "react-native";
import { GenericButton } from "../components/";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { TransactionHistory } from "../components/TransactionHistoryList";
import { TransactionsChart, SendWidget } from "../components";

const openBottomSheet = (ref) => {
  Keyboard.dismiss();
  ref.current.open();
};

const closeBottomSheet = (ref) => {
  ref.current.close();
};

const TransactionHistoryScreen = ({ navigation }) => {
  const transactionHistory = useSelector(
    (state) => state.account.transactionHistory
  );
  const bottomSheetRef = useRef();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => openBottomSheet(bottomSheetRef)}
          title="Send Coin"
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.containerStyle}>
      <TransactionsChart transactions={transactionHistory} />
      <TransactionHistory transactions={transactionHistory} />
      <SendWidget ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

export default React.memo(TransactionHistoryScreen);
