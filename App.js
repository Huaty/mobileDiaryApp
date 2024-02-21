import Stack from "./navigator/stack";
import Homestack from "./navigator/homestack";
import React from "react";
import { UserProvider } from "./function/userContext";
export default function App() {
  return (
    <UserProvider>
      <Stack />
    </UserProvider>
  );
}
