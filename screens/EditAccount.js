import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const EditAccount = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Edit Account Page</Text>
			<View>
				<TextInput
					label='Username'
					value={username}
					onChangeText={(username) => setUsername(username)}
					mode='flat'
					style={styles.textinput}
				/>
				<TextInput
					label='Email'
					value={email}
					onChangeText={(email) => setEmail(email)}
					mode='flat'
					style={styles.textinput}
				/>
				<TextInput
					label='Password'
					value={password}
					onChangeText={(password) => setPassword(password)}
					mode='flat'
					style={styles.textinput}
				/>
				<TextInput
					label='Repeat Password'
					value={passwordRepeat}
					onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
					mode='flat'
					style={styles.textinput}
				/>
			</View>
			<Button
				mode='contained'
				color='red'
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate('main-page')}
			>
				Save - go to mainpage
			</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051C60',
		margin: 20,
	},
	textinput: {
		width: 300,
		marginBottom: 10,
	},
});

export default EditAccount;
