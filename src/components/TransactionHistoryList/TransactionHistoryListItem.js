import React from "react";
import { colors } from "../../styles/colors";
import { StyleSheet, Text, View } from "react-native";

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const TransactionHistoryListItem = ({
  timestamp = "September, 19, 2021",
  fromAddress = "",
  toAddress = "",
  amount = 0,
}) => {
  const date = new Date(timestamp);
  return (
    <View style={styles.transactionDetailsContainer}>
      <Text style={{ flex: 0.2 }}>
        {date.toLocaleTimeString("en-US", options)}
      </Text>
      <Text>{fromAddress}</Text>
      <Text> {toAddress}</Text>
      <Text> {amount}</Text>
    </View>
  );
};

export const TransactionHeaderItem = ({
  timestamp = "Timestamp",
  fromAddress = "From",
  toAddress = "To",
  amount = "Amount",
}) => (
  <View style={styles.transactionHeaderItem}>
    <Text>{timestamp}</Text>
    <Text>{fromAddress}</Text>
    <Text> {toAddress}</Text>
    <Text> {amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  transactionHeaderItem: {
    backgroundColor: colors.primaryBgColor,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
  transactionDetailsContainer: {
    backgroundColor: colors.whiteBgColor,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
});
