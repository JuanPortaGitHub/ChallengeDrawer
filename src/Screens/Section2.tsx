import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";

export const Section2 = () => {
  return (
    <View style={styles.container}>
      <Text>Section2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
