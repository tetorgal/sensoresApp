import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./src/themes/theme";

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation></BottomTabNavigation>
    </NavigationContainer>
  );
}
