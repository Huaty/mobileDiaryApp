import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import CommonButton from "@/assets/common/buttons";

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json(); // Extracts the JSON body content from the response
      console.log(data); // Log the actual data from the server
    } catch (error) {
      console.error("SignUp", Error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />

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
        <CommonButton title="Sign Up" onPress={handleSignup} />
        <CommonButton
          title="Login"
          onPress={() => navigation.navigate("LoginPage")}
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
    borderColor: "#ccc",
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

export default SignUpPage;
