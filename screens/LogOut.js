import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const LogOut = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Have you saved your work?</Text>
			<Button
				mode='contained'
				color='red'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() =>
					navigation.getParent('MainStack').navigate('Landing Page')
				}
			>
				Logging Out
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

export default LogOut;
