import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountDetails from '../screens/AccountDetails';
import EditAccount from '../screens/EditAccount';

const Stack = createStackNavigator();

const Account = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='My Account'
				component={AccountDetails}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Edit Account'
				component={EditAccount}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default Account;
