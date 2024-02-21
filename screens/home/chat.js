import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import { io } from "socket.io-client";

import UserContext from "@/function/userContext";
const socket = io(""); // Replace <your_server_ip> with your server's IP address
import { KeyboardAvoidingView } from "react-native";
const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { userData } = useContext(UserContext);
  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chat message", {
        username: userData.userName,
        message: message,
      });
      setMessage("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
  },
});

export default App;
