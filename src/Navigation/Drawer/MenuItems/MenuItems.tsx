import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerItem, useDrawerProgress } from "@react-navigation/drawer";
import { DrawerRoutes } from "../DrawerRoutes";
import Animated, { Adaptable, interpolateNode } from "react-native-reanimated";
import Colors from "../../../Utils/Colors";

const MenuItems = (props: any) => {
  const progress = useDrawerProgress();
  const translateY = interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [0, 40],
  });

  const translateX = interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 0],
    outputRange: [0, 0],
  });
  const borderRadius = interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [30, 30],
  });
  const animatedStyle = {
    borderRadius,
    transform: [{ translateY, translateX }],
  };
  return (
    <Animated.ScrollView style={[styles.drawerContainer, animatedStyle]}>
      <Text style={styles.title}>Beka</Text>
      {DrawerRoutes.map((route, position) => {
        const isFocused = props.state.index === position;

        return (
          <View
            key={route.name}
            style={route.name == "SignOut" && styles.separator}
          >
            <DrawerItem
              key={route.name}
              label={({ focused }) => {
                return (
                  <Text
                    style={focused ? styles.activeText : styles.inactiveText}
                  >
                    {route.text}
                  </Text>
                );
              }}
              style={
                isFocused ? styles.activeContainer : styles.inActiveContainer
              }
              onPress={() => props.navigation.navigate(`${route.name}`)}
              focused={isFocused}
            />
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: Colors.darkGray,
    padding: 30,
    flex: 1,
    width: 1000,
  },
  separator: {
    paddingVertical: 30,
    marginTop: 30,
    borderTopColor: Colors.gray,
    borderTopWidth: 1.5,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.white,
    marginLeft: 60,
    marginBottom: 40,
    marginTop: 40,
  },
  activeContainer: {
    backgroundColor: "rgba(181,103,109,0.2)",
    borderRadius: 18,
    paddingHorizontal: 20,
    width: 200,
  },
  activeText: {
    color: Colors.accent,
    fontSize: 20,
  },
  inActiveContainer: {
    marginTop: 0,
    borderRadius: 18,
    paddingHorizontal: 20,
  },

  inactiveText: {
    color: Colors.white,
    fontSize: 20,
  },
});

export default MenuItems;
