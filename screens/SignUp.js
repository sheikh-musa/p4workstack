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

const Signup = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	const firstNameRef = React.useRef();
	const lastNameRef = React.useRef();
	const usernameRef = React.useRef();
	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const passwordRepeatRef = React.useRef();

	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.containerScrollView}
			>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.container}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							<Text style={styles.title}>Create an account</Text>
							<View>
								<TextInput
									label='First Name'
									value={firstName}
									onChangeText={(firstName) => setFirstName(firstName)}
									mode='flat'
									textContentType='name'
									style={styles.textinput}
									returnKeyType='next'
									ref={firstNameRef}
									onSubmitEditing={() => lastNameRef.current?.focus()}
								/>
								<TextInput
									label='Last Name'
									value={lastName}
									onChangeText={(lastName) => setLastName(lastName)}
									mode='flat'
									textContentType='familyName'
									style={styles.textinput}
									returnKeyType='next'
									ref={lastNameRef}
									onSubmitEditing={() => usernameRef.current?.focus()}
								/>
								<TextInput
									label='Username'
									value={username}
									onChangeText={(username) => setUsername(username)}
									mode='flat'
									textContentType='username'
									style={styles.textinput}
									returnKeyType='next'
									ref={usernameRef}
									onSubmitEditing={() => emailRef.current?.focus()}
								/>
								<TextInput
									label='Email'
									value={email}
									onChangeText={(email) => setEmail(email)}
									mode='flat'
									textContentType='emailAddress'
									style={styles.textinput}
									returnKeyType='next'
									ref={emailRef}
									onSubmitEditing={() => passwordRef.current?.focus()}
								/>
								<TextInput
									label='Password'
									value={password}
									onChangeText={(password) => setPassword(password)}
									mode='flat'
									secureTextEntry={true}
									textContentType='password'
									style={styles.textinput}
									returnKeyType='next'
									ref={passwordRef}
									onSubmitEditing={() => passwordRepeatRef.current?.focus()}
								/>
								<TextInput
									label='Repeat Password'
									value={passwordRepeat}
									onChangeText={(passwordRepeat) =>
										setPasswordRepeat(passwordRepeat)
									}
									mode='flat'
									secureTextEntry={true}
									textContentType='newPassword'
									style={styles.textinput}
									returnKeyType='go'
									ref={passwordRepeatRef}
								/>
							</View>
							<Button
								mode='contained'
								color='red'
								style={{ borderRadius: 25, marginTop: 30 }}
								onPress={() => navigation.navigate('Log In')}
							>
								Sign Up
							</Button>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
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
