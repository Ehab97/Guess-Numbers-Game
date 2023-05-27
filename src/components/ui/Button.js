import React from "react";
import {  Text, StyleSheet, Pressable, View } from "react-native";
import { Colors } from "../../helper/constants";

const PrimaryButton = ({ title, onPress, style, children }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.title}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  button: {
    backgroundColor:Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,

  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
