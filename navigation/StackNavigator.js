import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCard from '../screens/AddCard';
import SignUp from '../screens/SignUp';
import EditAccount from '../screens/EditAccount';
import MainPage from '../screens/MainPage';
import LoginPage from '../screens/LoginPage';
import SplashPage from '../screens/SplashPage';
import AccountDetails from '../screens/AccountDetails';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#9AC4F8',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#9AC4F8',
				},
				headerTintColor: 'white',
				headerBackTitle: 'Back',
			}}
		>
			<Stack.Screen name='splash-page' component={SplashPage} />
			<Stack.Screen name='sign-up' component={SignUp} />
			<Stack.Screen name='log-in' component={LoginPage} />
			<Stack.Screen name='acc-details' component={AccountDetails} />
			<Stack.Screen name='main-page' component={MainPage} />
			<Stack.Screen name='add-card' component={AddCard} />
			<Stack.Screen name='edit-acc' component={EditAccount} />
		</Stack.Navigator>
	);
};

export { MainStackNavigator };
