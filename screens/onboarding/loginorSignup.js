import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
const { width } = Dimensions.get("screen");
import CommonButton from "@common/buttons";

const LoginorSignupPage = ({ navigation }) => {
  return (
    <View>
      <CommonButton
        title="Sign Up"
        onPress={() => navigation.navigate("SignupPage")}
      />
      <CommonButton
        title="Login"
        onPress={() => navigation.navigate("LoginPage")}
      />
    </View>
  );
};

style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginorSignupPage;
