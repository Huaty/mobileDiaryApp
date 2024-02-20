import "react-native-gesture-handler";
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

export default function DashboardPage() {
  return (
    <View style={style.container}>
      <Text>dashboard</Text>
    </View>
  );
}

style = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
