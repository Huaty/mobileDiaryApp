import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import OnboardingPage from "@screens/onboarding/onboarding";
import LoginPage from "@screens/onboarding/login";
import SignUpPage from "@/screens/onboarding/signup";
import LoginorSignupPage from "@/screens/onboarding/loginorSignup";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginorSignupPage"
        component={LoginorSignupPage}
        hoptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupPage"
        component={SignUpPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
