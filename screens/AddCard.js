import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const NewCard = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Add Card Page</Text>
			<Button
				mode='contained'
				color='red'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('Main')}
			>
				Save
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
});

export default NewCard;
