import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from '../Screens/Homescreen';
import CategoryScreen from '../Screens/CategoryScreen';
import WhitelabelDrawer from './WhitelabelDrawer';
import AboutUsScreen from '../Screens/AboutUsScreen';

function AppContainer() {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType={'slide'}
                drawerContent={(props) => <WhitelabelDrawer {...props} />}>
                <Drawer.Screen name="Home" component={Homescreen} />
                <Drawer.Screen name="Category" component={CategoryScreen} />
                <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppContainer;
