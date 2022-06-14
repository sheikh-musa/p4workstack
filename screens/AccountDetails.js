import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AccountDetails = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Account Details Page</Text>
			<Button
				mode='contained'
				color='red'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('edit-acc')}
			>
				Edit Details
			</Button>

			<Button
				mode='contained'
				color='green'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('main-page')}
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
