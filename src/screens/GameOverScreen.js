import React from "react";
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, useWindowDimensions } from "react-native";
import Title from "../components/game/Title";
import { Colors } from "../helper/constants";
import PrimaryButton from "../components/ui/Button";
function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 350) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title title={`Game Over`} />
        <View style={[styles.imageConatiner, imageStyle]}>
          <Image source={require("../../assets/images/success.png")} style={styles.image} />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{" "}
            <Text tyle={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <PrimaryButton onPress={onRestart}>NEW GAME</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageConatiner: {
    // width: deviceWidth < 350 ? 150 : 300,
    // height: deviceWidth < 350 ? 150 : 300,
    // borderRadius: deviceWidth < 350 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 12,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});
export default GameOverScreen;
