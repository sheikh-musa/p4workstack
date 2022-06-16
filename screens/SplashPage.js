import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import WorkstackLogo from '../assets/workstack-logo.jpeg';

const MainPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image source={WorkstackLogo} style={styles.image} />
			<Text>
				Keep up with work, know where you're at
				{'\n'}
			</Text>
			<View style={{ flexDirection: 'row' }}>
				<Button
					mode='contained'
					color='red'
					style={{
						width: 100,
						borderRadius: 25,
						marginLeft: 10,
						marginRight: 10,
					}}
					onPress={() => navigation.navigate('sign-up')}
				>
					SignUp
				</Button>
				<Button
					mode='contained'
					color='green'
					style={{
						width: 100,
						borderRadius: 25,
						marginLeft: 10,
						marginRight: 10,
					}}
					onPress={() => navigation.navigate('log-in')}
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
