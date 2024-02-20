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
import React, { useState, useEffect } from "react";
import CommonButton from "@common/buttons";
const { width } = Dimensions.get("screen");

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/users");
      const text = await response.text();
      console.log(text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true} // Hides the password
      />

      <View style={styles.buttonContainer}>
        <CommonButton title="Login" onPress={fetchData} />
        <CommonButton
          title="Signup"
          onPress={() => navigation.navigate("SignupPage")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    width: "100%",
  },
});

export default LoginPage;
