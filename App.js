import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigator/stack";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
