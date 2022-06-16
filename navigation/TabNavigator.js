import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddCard from '../screens/AddCard';
import MainPage from '../screens/MainPage';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Board') {
						iconName = focused ? 'ios-browsers-sharp' : 'ios-browsers-sharp';
					} else if (route.name === 'Add Card') {
						iconName = focused ? 'ios-duplicate' : 'ios-duplicate';
					}
					return <Icon name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Screen
				name='Board'
				component={MainPage}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name='Add Card'
				component={AddCard}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
