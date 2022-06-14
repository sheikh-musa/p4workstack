import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddCard from './screens/AddCard';
import SignUp from './screens/SignUp';
import EditAccount from './screens/EditAccount';
import MainPage from './screens/MainPage';
import LoginPage from './screens/LoginPage';
import SplashPage from './screens/SplashPage';
import AccountDetails from './screens/AccountDetails';
import { MainStackNavigator } from './navigation/StackNavigator';

// const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
