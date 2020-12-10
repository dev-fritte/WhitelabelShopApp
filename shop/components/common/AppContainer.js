import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from '../Homescreen/Homescreen';
import CategoryScreen from '../CategoryScreen/CategoryScreen';

function AppContainer() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Homescreen} />
                <Drawer.Screen name="Category" component={CategoryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppContainer;
