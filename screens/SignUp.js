import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';


const axios = require('axios').default;
const instance = axios.create({
	baseURL: 'https://sdic4g5.herokuapp.com/',
	// baseURL: "http://localhost:3001/",
});

const Signup = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	const [regErr, setRegErr] = useState('');
	const [show, setShow] = useState(false);

	function handleClose() {
		setShow(false);
		setRegErr('');
		setFirstName('');
		setLastName('');
		setUsername('');
		setEmail('');
		setPassword('');
	}

	const handleShow = () => setShow(true);

	const handleRegFirstName = (event) => {
		setFirstName(event.target.value);
		console.log('first name is:', event.target.value);
	};
	const handleRegLastName = (event) => {
		setLastName(event.target.value);
		console.log('last name is:', event.target.value);
	};
	const handleRegUser = (event) => {
		setUsername(event.target.value);
		console.log('username is:', event.target.value);
	};
	const handleRegEmail = (event) => {
		setEmail(event.target.value);
		console.log('email is:', event.target.value);
	};
	const handleRegPW = (event) => {
		setPassword(event.target.value);
		console.log('password is:', event.target.value);
	};

	const toRegister = (event) => {
		event.preventDefault();
		console.log('first name 👉️', firstName);
		console.log('last name 👉️', lastName);
		console.log('username 👉️', username);
		console.log('email 👉️', email);
		console.log('password 👉️', password);
		instance
			.post('/signup', {
				firstName: firstName,
				lastName: lastName,
				username: username,
				password: password,
				email: email,
			})
			.then(function (response) {
				console.log(response);
				handleClose();
			})
			.catch(function (error) {
				console.log(error.response.data.message);
				setRegErr(error.response.data.message);
			});
	};

	const firstNameRef = React.useRef();
	const lastNameRef = React.useRef();
	const usernameRef = React.useRef();
	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const passwordRepeatRef = React.useRef();

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
						onPress={() => navigation.navigate('log-in')}
					>
						Create Account - go to login
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
	},
	safeAreaContainer: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: 'white',
	},
	scrollView: {
		backgroundColor: 'white',
		marginHorizontal: 20,
	},
	containerScrollView: {
		flex: 1,
		alignItems: 'center',
	},
	inner: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051C60',
		margin: 20,
		textAlign: 'center',
	},
	textinput: {
		width: 300,
		marginBottom: 10,
	},
});

export default Signup;
