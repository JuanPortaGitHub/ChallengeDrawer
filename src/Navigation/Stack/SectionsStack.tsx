import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Section1 } from "../../Screens/Section1";
import { Section2 } from "../../Screens/Section2";
import { Sections } from "../../Screens/Sections";
import Colors from "../../Utils/Colors";

export type StackParamList = {
  Secciones: undefined;
  Seccion1: undefined;
  Seccion2: undefined;
};

const SectionsStackNavigation = () => {
  const SectionsStack = createStackNavigator<StackParamList>();
  return (
    <SectionsStack.Navigator
      initialRouteName="Secciones"
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: { backgroundColor: Colors.darkRed },
      }}
    >
      <SectionsStack.Screen
        options={{ headerShown: false }}
        name="Secciones"
        component={Sections}
      />
      <SectionsStack.Screen name="Seccion1" component={Section1} />
      <SectionsStack.Screen name="Seccion2" component={Section2} />
    </SectionsStack.Navigator>
  );
};

export default SectionsStackNavigation;
