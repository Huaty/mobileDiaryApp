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
import { useContext } from "react";
const { width } = Dimensions.get("screen");

import UserContext from "@/function/userContext";

export default function HomePage() {
  const { userData } = useContext(UserContext);
  return (
    <View style={style.container}>
      <Text>Home</Text>
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
