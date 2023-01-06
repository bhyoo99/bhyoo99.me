/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, TouchableOpacity } from "react-native";

import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import RootScreen from "../screens/RootScreen";
import { RootStackParamList } from "../types/types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={
        colorScheme === "dark"
          ? { ...DarkTheme, colors: { ...DarkTheme.colors, card: "#2a2a2a" } }
          : DefaultTheme
      }>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="Root"
        component={RootScreen}
        options={{
          title: "@bhyoo99",
          headerTitleStyle: { fontSize: 17 },
          headerRight: () => {
            return (
              <View
                style={{
                  marginRight: 8,
                  flexDirection: "row",
                  backgroundColor: "none",
                  opacity: 0.6,
                }}>
                <TouchableOpacity style={{ marginRight: 8 }}>
                  <MaterialCommunityIcons name="github" size={24} color={colors.text} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 8 }}>
                  <MaterialCommunityIcons name="twitter" size={24} color={colors.text} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 8 }}>
                  <MaterialCommunityIcons name="linkedin" size={24} color={colors.text} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
