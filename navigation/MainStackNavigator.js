import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import LoginPage from '../screens/LoginPage';
import SplashPage from '../screens/SplashPage';
import Home from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator id='MainStack'>
			<Stack.Screen
				name='Landing Page'
				component={SplashPage}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Sign Up'
				component={SignUp}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Log In'
				component={LoginPage}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='MainDrawer'
				component={Home}
				options={{ headerShown: false, gestureEnabled: false }}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
