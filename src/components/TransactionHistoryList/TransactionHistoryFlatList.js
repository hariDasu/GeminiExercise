import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import { colors } from "../../styles/colors";
import {
  TransactionHeaderItem,
  TransactionHistoryListItem,
} from "./TransactionHistoryListItem";

export const TransactionHistory = ({ transactions }) => {
  const renderTransaction = ({ item }) => {
    const { timestamp, fromAddress, toAddress, amount } = item;

    return (
      <TransactionHistoryListItem
        timestamp={timestamp}
        fromAddress={fromAddress}
        toAddress={toAddress}
        amount={amount}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) =>
          `${item.timestamp}-${item.fromAddress}-${item.toAddress}`
        }
        ListHeaderComponent={<TransactionHeaderItem />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: colors.primaryBgColor,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
