import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const MainPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>MAIN PAGE</Text>
			<Button
				mode='contained'
				color='red'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('edit-acc')}
			>
				Edit Account
			</Button>
			<Button
				mode='contained'
				color='green'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('add-card')}
			>
				Add Card
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

export default MainPage;
