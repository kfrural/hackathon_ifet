import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index  from '../pages/Index';
import Login from '../pages/Login';
import Refeitorio from "../pages/TicketAlmoco";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Refeitorio" //AQUI TEM QUE FICAR Index TO TIRANDO PRA NAO RODAR VARIAAS VEZES
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Refeitorio" component={Refeitorio} />
        </Stack.Navigator>
    );
}

export default MyStack;