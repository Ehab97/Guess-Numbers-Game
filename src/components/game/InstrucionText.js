import React from "react";

import { Text, StyleSheet } from "react-native";
import { Colors } from "../../helper/constants";

function InstrucionText({ text, style }) {
  return <Text style={[styles.instructionText, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily:'open-sans',
  },
});

export default InstrucionText;
