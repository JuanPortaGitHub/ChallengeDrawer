import { View, StatusBar } from "react-native";
import NavigationDrawer from "./src/Navigation/Drawer/Drawer";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <NavigationContainer>
        <NavigationDrawer />
      </NavigationContainer>
    </View>
  );
}
