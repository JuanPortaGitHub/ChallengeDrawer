import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Contact } from "../../Screens/Contact";
import SectionsStackNavigation from "../Stack/SectionsStack";
import Colors from "../../Utils/Colors";
import { Layout } from "../../Layout/Layout";

interface Props {
  route: { name: string };
  navigation: { toggleDrawer: () => void };
}

type TabParamList = {
  Home: undefined;
  Contact: undefined;
};

const Tabs = (props: Props) => {
  const Tab = createBottomTabNavigator<TabParamList>();
  const sectionName = props.route.name;
  const toggleDrawer = props.navigation.toggleDrawer;
  return (
    <Layout sectionName={sectionName} toggleDrawer={toggleDrawer}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={SectionsStackNavigation}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account"
                color={Colors.darkGray}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="bell"
                color={Colors.darkGray}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Layout>
  );
};

export default Tabs;
