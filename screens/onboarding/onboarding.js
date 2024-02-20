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
import WelcomePage from "./welcome";
import LoginorSignupPage from "./loginorSignup";

const OnboardingPage = ({ navigation }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={style.container}
    >
      <View style={style.page}>
        <WelcomePage />
      </View>
      <View style={style.page}>
        <LoginorSignupPage navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  page: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingPage;
