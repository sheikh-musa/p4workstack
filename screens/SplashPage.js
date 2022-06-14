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
					onPress={() => navigation.navigate('Sign Up')}
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
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		resizeMode: 'contain',
		width: 350,
		height: 200,
	},
});

export default MainPage;
