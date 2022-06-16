import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const NewCard = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Add Card Page</Text>
			<Button
				mode='contained'
				color='#EF4B4C'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('main-page')}
			>
				Save Card - go to mainpage
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
