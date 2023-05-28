import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../helper/constants";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 30,
    color: Colors.accent500,
    fontFamily:'open-sans-bold',
  },
});

export default NumberContainer;
