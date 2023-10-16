import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen, WelcomeScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
    );
};

export default MyStack;