import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Index from "./index";
import Lacta from './lacta';
import Garoto from './garoto';
import Nestle from './nestle';

const Stack = createStackNavigator();

export default function Rotas(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Index" component={Index} options={{headerShown: false}} />
                <Stack.Screen name="Lacta" component={Lacta} options={{headerShown: false}} />
                <Stack.Screen name="Garoto" component={Garoto} options={{headerShown: false}} />
                <Stack.Screen name="Nestle" component={Nestle} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}