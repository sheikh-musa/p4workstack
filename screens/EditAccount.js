import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
			<Image
				style={{
					marginRight: 10,
					marginBottom: -11,
					height: 120,
					width: 120
				}}
				source={require("../assets/avatar.png")}
			/>
			<Image
				style={{
					height: 90,
					width: 250
				}}
				source={require("../assets/editacc.png")}
			/>
			<Text></Text>
			<View>
				<TextInput
					label='Username'
					value={username}
					onChangeText={(username) => setUsername(username)}
					mode='outlined'
					style={styles.textinput}
				/>
				<TextInput
					label='Email'
					value={email}
					onChangeText={(email) => setEmail(email)}
					mode='outlined'
					style={styles.textinput}
				/>
				<TextInput
					label='Password'
					value={password}
					onChangeText={(password) => setPassword(password)}
					mode='outlined'
					style={styles.textinput}
				/>
				<TextInput
					label='Repeat Password'
					value={passwordRepeat}
					onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
					mode='outlined'
					style={styles.textinput}
				/>
			</View>
			<Button
				mode='contained'
				color='#2E424D'
				style={{ borderRadius: 25, marginTop: 10 }}
				onPress={() => navigation.navigate('acc-details')}
			>
				Save - go to acc details
			</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EF4B4C',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textinput: {
		width: 300,
		marginBottom: 10,
	},
});

export default EditAccount;
