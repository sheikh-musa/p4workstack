import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
	Button,
	Chip,
	DefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
import WorkstackLogo from '../assets/workstack-logo.jpeg';
import pic2 from '../assets/pic2.png';
import ws from '../assets/ws.png';

const SplashPage = ({ navigation }) => {
	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: 'red',
			text: 'black',
		},
	};

	return (
		<View style={styles.container}>
			<Image style={styles.ws} source={ws} />
			<Image style={styles.pic2} source={pic2} />
			<Text style={styles.titleText}>Stay focus and organized</Text>
			<Text style={styles.baseText}>
				Simply drag and drop your things to do,
			</Text>
			<Text style={styles.baseText}>and get more things done </Text>
			<Text>{'\n'}</Text>
			<View style={{ flexDirection: 'row' }}>
				<Button
					mode='contained'
					color='#EF4B4C'
					style={styles.button}
					onPress={() => navigation.navigate('Sign Up')}
				>
					SignUp
				</Button>
				<Button
					mode='contained'
					color='#FCC666'
					style={styles.button}
					onPress={() => navigation.navigate('Log In')}
				>
					Login
				</Button>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2E424D',
		alignItems: 'center',
		justifyContent: 'center',
	},
	baseText: {
		fontSize: 13,
		color: 'white',
		textAlign: 'center',
	},
	titleText: {
		fontSize: 21,
		fontWeight: 'bold',
		color: 'white',
	},
	ws: {
		height: 90,
		width: 200,
	},
	pic2: {
		height: 210,
		width: 320,
		marginBottom: 10,
	},
	button: {
		width: 100,
		borderRadius: 25,
		marginLeft: 10,
		marginRight: 10,
	},
});

export default SplashPage;
