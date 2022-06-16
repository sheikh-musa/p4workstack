import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Avatar3 from '../assets/avatar3.png';

const AccountDetails = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image
				style={{
					marginRight: 10,
					marginBottom: -11,
					height: 120,
					width: 120,
				}}
				source={Avatar3}
			/>
			<Text></Text>
			<Text>Account Details Page</Text>
			<Button
				mode='contained'
				color='#EF4B4C'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('Edit Account')}
			>
				Edit Details
			</Button>

			<Button
				mode='contained'
				color='#2E424D'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('Home')}
			>
				Back
			</Button>
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
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051C60',
		margin: 20,
	},
});

export default AccountDetails;
