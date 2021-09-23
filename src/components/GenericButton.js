import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

import { colors } from "../styles/colors";

export const GenericButton = ({
  color = colors.colorPrimary,
  onPress = () => "",
  title = "Submit",
  disabled = false,
  width = `80%`,
  loading = false,
  testID = "button",
}) => {
  const disabledColor = "#999999";
  const buttonColor = disabled ? disabledColor : color;

  const getInnerView = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={colors.colorPrimary} />;
    } else {
      return (
        <Text style={[styles.buttonText, { color: colors.textColor }]}>
          {title}
        </Text>
      );
    }
  };

  const _onPress = (args) => {
    !disabled && onPress(args);
  };

  return (
    <TouchableOpacity
      onPress={_onPress}
      style={[styles.buttonView, { backgroundColor: buttonColor, width }]}
      testID={testID}
    >
      {getInnerView()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    alignItems: "center",
    height: 50,
    borderWidth: 0.5,
    borderRadius: 25,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.textColor,
    fontSize: 16,
    letterSpacing: 1.39,
    lineHeight: 20,
  },
});
