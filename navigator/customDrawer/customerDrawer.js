import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

function CustomDrawerContent(props) {
  const { userId, userName } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoContainer}>
        <View style={styles.profileCircle}>
          <Text style={styles.initials}>JD</Text>
        </View>
        <Text style={styles.username}>{userName}</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("HomePage")}
      />
      <DrawerItem
        label="Dashboard"
        onPress={() => props.navigation.navigate("DashboardPage")}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    padding: 20,
    alignItems: "center",
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  initials: {
    fontSize: 18,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
  },
});

export default CustomDrawerContent;
