import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCard from './screens/AddCard';
import SignUp from './screens/SignUp';
import EditAccount from './screens/EditAccount';
import MainPage from './screens/MainPage';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='home-page' component={HomePage} />
				<Stack.Screen name='sign-up' component={SignUp} />
				<Stack.Screen name='log-in' component={LoginPage} />
				<Stack.Screen name='main-page' component={MainPage} />
				<Stack.Screen name='add-card' component={AddCard} />
				<Stack.Screen name='edit-acc' component={EditAccount} />
			</Stack.Navigator>
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
