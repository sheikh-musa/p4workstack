import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Signup = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.title}>Create an account</Text>
					<View>
						<TextInput
							label='First Name'
							value={firstName}
							onChangeText={(firstName) => setFirstName(firstName)}
							mode='flat'
							style={styles.textinput}
						/>
						<TextInput
							label='Last Name'
							value={lastName}
							onChangeText={(lastName) => setLastName(lastName)}
							mode='flat'
							style={styles.textinput}
						/>
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
							onChangeText={(passwordRepeat) =>
								setPasswordRepeat(passwordRepeat)
							}
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
						Create Account - go to main page
					</Button>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20,
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

export default Signup;
