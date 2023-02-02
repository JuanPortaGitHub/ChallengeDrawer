import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Layout } from "../Layout/Layout";
import { DrawerScreensProps } from "../Navigation/Drawer/DrawerRoutes";
import Colors from "../Utils/Colors";

export const SignOut = (props: DrawerScreensProps) => {
  const sectionName = props.route.name;
  const toggleDrawer = props.navigation.toggleDrawer;
  return (
    <Layout sectionName={sectionName} toggleDrawer={toggleDrawer}>
      <View style={styles.container}>
        <Text>SignOut</Text>
      </View>
    </Layout>
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
