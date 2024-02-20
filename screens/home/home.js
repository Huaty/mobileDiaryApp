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

export default function HomePage({ route }) {
  const { userId, userName } = route.params;
  return (
    <View style={style.container}>
      <Text>User ID: {userId}</Text>
      <Text>User ID: {userName}</Text>
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
