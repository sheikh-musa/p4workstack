import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const usernameRef = React.useRef();
	const passwordRef = React.useRef();

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<Text style={styles.title}>Login Page</Text>
					<View>
						<TextInput
							label='Username'
							value={username}
							onChangeText={(username) => setUsername(username)}
							mode='outlined'
							style={{ width: 200 }}
							returnKeyType='next'
							ref={usernameRef}
							onSubmitEditing={() => passwordRef.current?.focus()}
						/>
						<TextInput
							label='Password'
							value={password}
							onChangeText={(password) => setPassword(password)}
							mode='outlined'
							style={{ width: 200 }}
							secureTextEntry={true}
							returnKeyType='go'
							ref={passwordRef}
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

					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<Button
							mode='contained'
							color='green'
							style={{ borderRadius: 25, marginTop: 30, marginRight: 5 }}
							onPress={() => navigation.navigate('Sign Up')}
						>
							Sign up
						</Button>
						<Button
							mode='contained'
							color='red'
							style={{ borderRadius: 25, marginTop: 30, marginLeft: 5 }}
							onPress={() => navigation.navigate('Main')}
						>
							Login
						</Button>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
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
	tinytext: {
		fontSize: 12,
		marginTop: 5,
	},
});

export default Login;
