import React from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/Button";
import { Colors } from "../helper/constants";
import Title from "../components/game/Title";
import Card from "../components/ui/Card";
import InstrucionText from "../components/game/InstrucionText";

function StartGameScreen({ startGameHandler }) {
  const [enteredNumber, setEnteredNumber] = React.useState("");

  const numberInputHandler = (inputValue) => {
    setEnteredNumber(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    console.log("valid Number", chosenNumber);
    startGameHandler(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title title={`Guess My number`} />
      <Card>
        <InstrucionText text={`Enter a Number`} />
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Reset" onPress={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Confirm" onPress={confirmInputHandler}>
              confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    // justifyContent:'space-around',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
