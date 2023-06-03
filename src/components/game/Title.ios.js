import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS == "android" ? 2 : 0,
    // borderWidth: Platform.select({
    //   ios: 0,
    //   android: 2,
    // }),
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});
export default Title;
