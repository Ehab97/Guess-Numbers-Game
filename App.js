import React from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import { Colors } from "./src/helper/constants";
import GameOverScreen from "./src/screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);


  React.useEffect(() => {
    async function prepare() {
      try {
        // await Font.loadAsync(Entypo.font);
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = () => {
    setIsGameOver(true);
  };

  const restartGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let gameScreen = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber) {
    gameScreen = (
      <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler} setGuessRounds={setGuessRounds} />
    );
  }

  if (isGameOver && userNumber) {
    gameScreen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={restartGameHandler} />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary800, Colors.accent500]}
      onLayout={onLayoutRootView}
    >
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
