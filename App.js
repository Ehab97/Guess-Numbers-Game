import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import { Colors } from "./src/helper/constants";
import GameOverScreen from "./src/screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = () => {
    setIsGameOver(true);
  };

  let gameScreen = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber) {
    gameScreen = <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler} />;
  }

  if (isGameOver && userNumber) {
    gameScreen = <GameOverScreen />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary800, Colors.accent500]}>
      <ImageBackground
        source={require("./assets/images/bg.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgorundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{gameScreen}</SafeAreaView>
        {/* <StartGameScreen startGameHandler={startGameHandler}  /> */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgorundImage: {
    opacity: 0.15,
  },
});
