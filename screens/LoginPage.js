import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Login Page</Text>
			</View>
			<View>
				<TextInput
					label='Username'
					value={username}
					onChangeText={(username) => setUsername(username)}
					mode='outlined'
					style={{ width: 200 }}
				/>
				<TextInput
					label='Password'
					value={password}
					onChangeText={(password) => setPassword(password)}
					mode='outlined'
					style={{ width: 200 }}
					secureTextEntry={true}
				/>
				<Text
					style={styles.tinytext}
					onPress={() =>
						Alert.alert('Reset Password', 'Confirm reset password?', [
							{
								text: 'Cancel',
							},
							{
								text: 'Reset',
							},
						])
					}
				>
					Forgot Password?
				</Text>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<Button
					mode='contained'
					color='green'
					style={{ borderRadius: 25, marginTop: 30, marginRight: 5 }}
					onPress={() => navigation.navigate('sign-up')}
				>
					Sign up
				</Button>
				<Button
					mode='contained'
					color='red'
					style={{ borderRadius: 25, marginTop: 30, marginLeft: 5 }}
					onPress={() => navigation.navigate('main-page')}
				>
					Login (MP)
				</Button>
			</View>
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
		paddingBottom: 10,
	},
});

export default Login;
