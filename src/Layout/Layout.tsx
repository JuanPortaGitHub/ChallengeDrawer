import React from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, { Adaptable, interpolateNode } from "react-native-reanimated";
import Colors from "../Utils/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  children: React.ReactNode;
  sectionName: string;
  toggleDrawer: () => void;
}

export const Layout = ({ children, sectionName, toggleDrawer }: Props) => {
  const progressScreen = useDrawerProgress();

  const translateY = interpolateNode(progressScreen as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [0, 60],
  });

  const rotate = interpolateNode(progressScreen as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: ["0deg", "-10deg"],
  });

  const borderTopLeftRadius = interpolateNode(
    progressScreen as Adaptable<number>,
    {
      inputRange: [0, 0],
      outputRange: [0, 40],
    }
  );

  const marginLeft = interpolateNode(progressScreen as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const animatedStyle = {
    borderTopLeftRadius,
    marginLeft,
    transform: [{ rotate, translateY }],
  };
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => toggleDrawer()}>
          <MaterialCommunityIcons
            style={styles.menuIcon}
            name="menu"
            color={Colors.lightGray}
            size={35}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.headerTitle}>{sectionName}</Text>
      </View>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  header: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.lightGray,
  },
  menuIcon: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
});
