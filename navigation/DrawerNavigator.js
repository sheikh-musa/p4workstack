import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from '../screens/MainPage';
import AddCard from '../screens/AddCard';
import LogOut from '../screens/LogOut';
import Account from './AccountNavigator';

const Drawer = createDrawerNavigator();

const Main = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Home' component={MainPage} />
			<Drawer.Screen name='Add Card' component={AddCard} />
			<Drawer.Screen name='Settings' component={Account} />
			<Drawer.Screen name='Log Out' component={LogOut} />
		</Drawer.Navigator>
	);
};

export default Main;
