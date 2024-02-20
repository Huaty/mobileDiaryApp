import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CommonButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5, // Adds spacing between buttons if multiple are used
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default CommonButton;
