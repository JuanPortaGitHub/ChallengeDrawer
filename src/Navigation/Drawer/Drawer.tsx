import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuItems from "./MenuItems/MenuItems";
import { DrawerList, DrawerRoutes } from "./DrawerRoutes";

const NavigationDrawer = () => {
  const Drawer = createDrawerNavigator<DrawerList>();

  return (
    <Drawer.Navigator
      initialRouteName="Start"
      useLegacyImplementation
      screenOptions={{
        sceneContainerStyle: { backgroundColor: "transparent" },
        drawerType: "back",
        headerShown: false,
        overlayColor: "transparent",
        drawerStyle: {
          width: 200,
        },
      }}
      drawerContent={(props) => {
        return <MenuItems {...props} />;
      }}
    >
      {DrawerRoutes.map((route) => {
        const name = route.name as keyof DrawerList;
        return (
          <Drawer.Screen
            key={route.name}
            name={name}
            component={route.component}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
