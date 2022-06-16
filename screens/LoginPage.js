import React, { useState } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
=======
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
>>>>>>> sophie
import { Button, TextInput } from 'react-native-paper';

const axios = require('axios').default;
const instance = axios.create({
	baseURL: 'https://sdic4g5.herokuapp.com/',
	// baseURL: "http://localhost:3001/",
});

// const [signIn, setSignIn] = React.useState(false);
// const [board, setBoard] = React.useState([]);
// const [token, setToken] = React.FragmentuseState('');
// const userSignIn = ({ board, token }) => {
// 	setBoard(board);
// 	setToken(token);
// 	setSignIn(true);
// };

const Login = ({ navigation }) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

<<<<<<< HEAD
	return (
		<View style={styles.container}>

			<Image
				style={{
					height: 90,
					width: 220
				}}
				source={require("../assets/login.png")}
			/>
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
				<Text></Text>
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
					color='#EF4B4C'
					style={{ borderRadius: 25, marginTop: 30, marginRight: 5 }}
					onPress={() => navigation.navigate('sign-up')}
				>
					Sign up
				</Button>
				<Button
					mode='contained'
					color='#2E424D'
					style={{ borderRadius: 25, marginTop: 30, marginLeft: 5 }}
					onPress={() => navigation.navigate('main-page')}
				>
					Login (MP)
				</Button>
			</View>
		</View>
=======
	const [logErr, setLogErr] = useState('');
	const [show, setShow] = useState(false);

	const usernameRef = React.useRef();
	const passwordRef = React.useRef();

	// function handleClose() {
	// 	setShow(false);
	// 	setLogErr('');
	// 	setEmail('');
	// 	setPassword('');
	// }

	// const handleShow = () => setShow(true);

	// const loginUser = (event) => {
	// 	setUsername(event.target.value);
	// 	console.log('username is', event.target.value);
	// };

	// const loginPassword = (event) => {
	// 	setPassword(event.target.value);
	// 	console.log('password is', event.target.value);
	// };

	// const toLogin = (event) => {
	// 	event.preventDefault();
	// 	console.log('username 👉️', username);
	// 	console.log('password 👉️', password);
	// 	instance
	// 		.post('/login', {
	// 			username: username,
	// 			password: password,
	// 		})
	// 		.then(function (response) {
	// 			console.log(response.data.data);
	// 			console.log('token', response.data.data.token);
	// 			props.login({
	// 				board: response.data.data.board,
	// 				token: response.data.data.token,
	// 			});
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error.response.data.message);
	// 			setLogErr(error.response.data.message);
	// 		});
	// };

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
							onPress={() => navigation.navigate('MainDrawer')}
						>
							Login
						</Button>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
>>>>>>> sophie
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCC666',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 100,
	},
<<<<<<< HEAD
	tinytext: {
		color: 'white',
	}
=======
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
>>>>>>> sophie
});

export default Login;
