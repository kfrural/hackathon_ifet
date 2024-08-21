import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index  from '../pages/Index';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Index"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default MyStack;