import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
        
      />
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default OnboardingLayout;
