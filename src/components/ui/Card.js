import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../helper/constants";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
