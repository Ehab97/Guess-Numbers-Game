import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Title from "../components/game/Title";
import { generateRandomBetween } from "../helper/random";
import NumberContainer from "../components/game/NumberContainer";
import HigherOrLower from "../components/game/HigherOrLower";

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userChoice, gameOverHandler }) {
  const intialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = React.useState(intialGuess);
  const nextGuessHandler = (direction) => {
    if ((direction === "lower" && currentGuess < userChoice) || (direction === "higher" && currentGuess > userChoice)) {
      Alert.alert(`Don't Lie!`, `You know that's wrong...`, [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  };

  React.useEffect(() => {
    if (currentGuess == userChoice) {
      gameOverHandler();
    }
  }, [currentGuess, userChoice, gameOverHandler]);

  return (
    <View style={styles.screen}>
      <Title title="Oppents's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <HigherOrLower handleClick={nextGuessHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    // alignItems: 'center'
  },
});

export default GameScreen;
