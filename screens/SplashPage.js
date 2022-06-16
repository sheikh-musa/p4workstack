import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Chip, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import WorkstackLogo from '../assets/workstack-logo.jpeg';

const MainPage = ({ navigation }) => {

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
			<Image
				style={{
					height: 90,
					width: 190
				}}
				source={require("../assets/ws.png")}
			/>
			<Image
				style={{
					height: 210,
					width: 320
				}}
				source={require("../assets/pic2.png")}
			/>
			<Text>

			</Text>
			<Text style={styles.titleText}>Stay focus and organized</Text>
			<Text style={styles.baseText}>Simply drag and drop your things to do,</Text>
			<Text style={styles.baseText}>and get more things done </Text>
			<Text>
				{'\n'}
			</Text>
			<View style={{ flexDirection: 'row' }}>
				<Button
					mode='contained'
					color='#EF4B4C'
					style={{
						width: 100,
						borderRadius: 25,
						marginLeft: 10,
						marginRight: 10,
					}}
					onPress={() => navigation.navigate('Sign Up')}
				>
					SignUp
				</Button>
				<Button
					mode='contained'
					color='#FCC666'
					style={{
						width: 100,
						borderRadius: 25,
						marginLeft: 10,
						marginRight: 10,
					}}
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
		paddingBottom: 100,
	},
	image: {
		flex: 1,
		justifyContent: "center"
	},
	baseText: {
		fontSize: 13,
		color: 'white',
		textAlign: 'center',
	},
	titleText: {
		fontSize: 21,
		fontWeight: "bold",
		color: 'white'
	},
});

export default MainPage;
