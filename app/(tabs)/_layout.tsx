import { Tabs } from "expo-router";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Games",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "game-controller" : "game-controller-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-border"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
