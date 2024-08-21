import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index  from '../pages/Index';
import Login from '../pages/Login';
import Refeitorio from "../pages/TicketAlmoco";
import Onibus from '../pages/Onibus';
import TicketBus from '../pages/ticketBus'

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="TicketBus" //AQUI TEM QUE FICAR Index TO TIRANDO PRA NAO RODAR VARIAAS VEZES
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Refeitorio" component={Refeitorio} />
            <Stack.Screen name="Onibus" component={Onibus} />
            <Stack.Screen name="TicketBus" component={TicketBus} />
        </Stack.Navigator>
    );
}

export default MyStack;