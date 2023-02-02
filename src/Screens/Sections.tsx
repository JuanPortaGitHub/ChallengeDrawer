import React from "react";
import { View, StyleSheet } from "react-native";
import { StyledButton } from "../Components/Button/StyledButton";
import Colors from "../Utils/Colors";

interface Props {
  navigation: any;
}

export const Sections = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StyledButton
        text="Seccion 1"
        onPress={() => navigation.navigate("Seccion1")}
      />
      <StyledButton
        text="Seccion 2"
        onPress={() => navigation.navigate("Seccion2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
