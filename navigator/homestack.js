import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "../navigator/customDrawer/customerDrawer"; // Adjust the path if needed
import { UserProvider } from "../function/userContext";
import HomePage from "@screens/home/home";
import DashboardPage from "@screens/home/dashboard";
const Drawer = createDrawerNavigator();
export default function Homestack({ route }) {
  const userId = route.params?.userId;
  const userName = route.params?.userName;
  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      drawerContent={(props) => (
        <CustomDrawerContent {...props} userId={userId} userName={userName} />
      )}
    >
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="DashboardPage" component={DashboardPage} />
    </Drawer.Navigator>
  );
}
