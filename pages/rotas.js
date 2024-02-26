import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Rotas(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lacta" component={Lacta}/>
        </Stack.Navigator>
    );
}