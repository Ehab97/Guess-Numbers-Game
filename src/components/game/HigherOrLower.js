import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import PrimaryButton from "../ui/Button";
import Card from "../ui/Card";
import InstrucionText from "./InstrucionText";
import { Ionicons } from "@expo/vector-icons";

function HigherOrLower({ handleClick }) {
  return (
    <Card>
      <InstrucionText text={`Higher or Lower ?`} style={styles.instrucionText} />
      <View style={styles.buttonContainer}>
        <PrimaryButton style={styles.button} onPress={handleClick.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={`white`} />
        </PrimaryButton>
        <PrimaryButton style={styles.button} onPress={handleClick.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color={`white`} />
        </PrimaryButton>
      </View>
    </Card>
  );
}



const styles = StyleSheet.create({
  container: {},
  instrucionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 12,
  },
  button: {
    width: 100,
    fontSize: 24,
    fontWeight: "bold",
    borderRadius: 12,
  },
});
export default HigherOrLower;
