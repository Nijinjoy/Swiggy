import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens";

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
    );
};

export default MyStack;