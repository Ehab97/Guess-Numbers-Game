import React from "react";
import { StyleSheet, View, Text } from "react-native";


function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontFamily:'open-sans-bold',
    fontSize: 24,
    color: 'white', 
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white', 
    padding: 12,
  },
});
export default Title;
