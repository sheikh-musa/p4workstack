import React, { useState } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image } from 'react-native';
=======
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
>>>>>>> sophie
import { Button, TextInput } from 'react-native-paper';

const EditAccount = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');
	const usernameRef = React.useRef();
	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const passwordRepeatRef = React.useRef();

	return (
<<<<<<< HEAD
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
=======
		<SafeAreaView style={styles.safeAreaContainer}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.containerScrollView}
>>>>>>> sophie
			>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.container}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							<Text style={styles.title}>Edit Account Page</Text>
							<View>
								<TextInput
									label='Username'
									value={username}
									onChangeText={(username) => setUsername(username)}
									mode='flat'
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
									style={styles.textinput}
									returnKeyType='done'
									ref={passwordRepeatRef}
								/>
							</View>
							<Button
								mode='contained'
								color='red'
								style={{ borderRadius: 25, marginTop: 30 }}
								onPress={() => navigation.navigate('My Account')}
							>
								Save
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
		backgroundColor: '#EF4B4C',
		justifyContent: 'center',
		alignItems: 'center',
	},
<<<<<<< HEAD
=======
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
	},
>>>>>>> sophie
	textinput: {
		width: 300,
		marginBottom: 10,
	},
});

export default EditAccount;
