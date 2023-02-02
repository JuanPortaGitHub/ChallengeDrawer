import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Utils/Colors";

export const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <Text style={styles.text}>Juan Ignacio Porta</Text>
      <Text style={styles.text}>crjuanporta@gmail.com</Text>
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
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
