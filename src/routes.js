import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Catalogo from './pages/Catalogo';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: true,
                cardStyle: {backgroundColor: '#313746'},
            }}
            initialRouteName="Catalogo"
            >
                <Stack.Screen 
                name='Catalogo'
                component={Catalogo}
                options={{
                   headerShown: true,
                   headerTransparent: true,
                   headerTitle: () => <Header />,
                }}
               />   
            </Stack.Navigator>
        </NavigationContainer>

    )
}