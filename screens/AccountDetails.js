import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import avatar3 from '../assets/avatar3.png';

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
				source={avatar3}
			/>
			<Text></Text>
			<Text style={styles.title}>Account Details Page</Text>
			<View style={{ flexDirection: 'row' }}>
				<Button
					mode='contained'
					color='#EF4B4C'
					style={{ borderRadius: 25, marginTop: 30, marginRight: 10 }}
					onPress={() => navigation.navigate('Edit Account')}
				>
					Edit
				</Button>

				<Button
					mode='contained'
					color='#2E424D'
					style={{ borderRadius: 25, marginTop: 30, marginLeft: 10 }}
					onPress={() => navigation.navigate('Home')}
				>
					Back
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCC666',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051C60',
	},
});

export default AccountDetails;
