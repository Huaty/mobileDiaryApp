import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "../navigator/customDrawer/customerDrawer"; // Adjust the path if needed
import HomePage from "@screens/home/home";
import DashboardPage from "@screens/home/dashboard";
import ChatPage from "@screens/home/chat";
const Drawer = createDrawerNavigator();
export default function Homestack() {
  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="DashboardPage" component={DashboardPage} />
      <Drawer.Screen name="ChatPage" component={ChatPage} />
    </Drawer.Navigator>
  );
}
