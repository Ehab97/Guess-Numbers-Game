import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../helper/constants";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 350 ? 12 : 24,
    margin: deviceWidth < 350 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: deviceWidth < 350 ? 25 : 30,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
