import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../helper/constants";

function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white', 
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white', 
    padding: 12,
  },
});
export default Title;
