import React from "react";
import { Alert, StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/game/Title";
import { generateRandomBetween } from "../helper/random";
import NumberContainer from "../components/game/NumberContainer";
import HigherOrLower from "../components/game/HigherOrLower";
import GuessLogItem from "../components/game/GuessLogItem";
import HigherOrLowerRotated from "../components/game/HigherOrLowerRotated";

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userChoice, gameOverHandler, setGuessRounds }) {
  const intialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = React.useState(intialGuess);
  const [guessRoundsNumbers, setGuessRoundsNumbers] = React.useState([intialGuess]);
  const { width, height } = useWindowDimensions();
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
    setGuessRounds((currentGuess) => currentGuess + 1);
    setGuessRoundsNumbers((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRoundsNumbers.length;
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <HigherOrLower handleClick={nextGuessHandler} />
    </>
  );

  React.useEffect(() => {
    if (currentGuess == userChoice) {
      gameOverHandler();
    }
  }, [currentGuess, userChoice, gameOverHandler]);

  React.useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  if (width > 500) {
    content = (
      <>
        <HigherOrLowerRotated handleClick={nextGuessHandler} cureentGuess={currentGuess} /> 
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title title="Oppents's Guess" />
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRoundsNumbers}
          renderItem={(itemData) => (
            <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
