import React from "react";
import { View, StyleSheet } from "react-native";
import PrimaryButton from "../ui/Button";
import Card from "../ui/Card";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "./NumberContainer";

function HigherOrLowerRotated({ handleClick, cureentGuess }) {
  return (
    <Card>
      <View style={styles.buttonContainer}>
        <PrimaryButton style={styles.button} onPress={handleClick.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={`white`} />
        </PrimaryButton>
        <NumberContainer>{cureentGuess}</NumberContainer>
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
export default HigherOrLowerRotated;
