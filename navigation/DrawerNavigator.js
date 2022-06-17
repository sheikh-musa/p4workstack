import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogOut from '../screens/LogOut';
import Account from './AccountNavigator';
import Board from './TabNavigator';

const Drawer = createDrawerNavigator();

const Main = () => {
	return (
		<Drawer.Navigator screenOptions={{ swipeEnabled: 'false' }}>
			<Drawer.Screen name='Home' component={Board} />
			<Drawer.Screen name='Settings' component={Account} />
			<Drawer.Screen name='Log Out' component={LogOut} />
		</Drawer.Navigator>
	);
};

export default Main;
