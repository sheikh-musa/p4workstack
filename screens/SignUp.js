import React, { useState } from "react";
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
	Image,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import avatar2 from "../assets/avatar2.png";
import createAcc from "../assets/createacc.png";

const axios = require("axios").default;
const instance = axios.create({
	baseURL: "https://sdic4g5.herokuapp.com/",
	// baseURL: "http://192.168.50.35:3001",
});

const Signup = ({ navigation }) => {
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [passwordRepeat, setPasswordRepeat] = React.useState("");

	// const [regErr, setRegErr] = useState("");
	// const [show, setShow] = useState(false);

	function handleClose() {
		// setShow(false);
		// setRegErr("");
		setFirstName("");
		setLastName("");
		setUsername("");
		setEmail("");
		setPassword("");
		setPasswordRepeat("");
	}

	// const handleShow = () => setShow(true);

	const handleRegFirstName = (event) => {
		setFirstName(event.target.value);
		console.log("first name is:", event.target.value);
	};
	const handleRegLastName = (event) => {
		setLastName(event.target.value);
		console.log("last name is:", event.target.value);
	};
	const handleRegUser = (event) => {
		setUsername(event.target.value);
		console.log("username is:", event.target.value);
	};
	const handleRegEmail = (event) => {
		setEmail(event.target.value);
		console.log("email is:", event.target.value);
	};
	const handleRegPW = (event) => {
		setPassword(event.target.value);
		console.log("password is:", event.target.value);
	};

	const toRegister = async (event) => {
		// event.preventDefault();
		instance
			.post("/register", {
				firstName: firstName,
				lastName: lastName,
				username: username,
				password: password,
				email: email,
			})
			.then(function (response) {
				console.log("THEN");
				console.log(response);
				handleClose();
				navigation.navigate("Log In", { message: "Registration successful!" });
			})
			.catch(function (error) {
				console.log("CATCH");
				// console.log(error.response);
				// console.log(error.response.request._response);
				// console.log(JSON.parse(error.response?.request._response).message);
				alert(JSON.parse(error.response.request._response).message);
				// setRegErr(error.response.data.message);
			});
	};

	const firstNameRef = React.useRef();
	const lastNameRef = React.useRef();
	const usernameRef = React.useRef();
	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const passwordRepeatRef = React.useRef();

	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.containerScrollView}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.container}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							<Image style={styles.image} source={avatar2} />
							<Image style={styles.image} source={createAcc} />
							<View>
								<TextInput
									label="First Name"
									value={firstName}
									onChangeText={(firstName) => setFirstName(firstName)}
									mode="flat"
									textContentType="name"
									style={styles.textinput}
									returnKeyType="next"
									ref={firstNameRef}
									onSubmitEditing={() => lastNameRef.current?.focus()}
									onChange={handleRegFirstName}
								/>
								<TextInput
									label="Last Name"
									value={lastName}
									onChangeText={(lastName) => setLastName(lastName)}
									mode="flat"
									textContentType="familyName"
									style={styles.textinput}
									returnKeyType="next"
									ref={lastNameRef}
									onSubmitEditing={() => usernameRef.current?.focus()}
									onChange={handleRegLastName}
								/>
								<TextInput
									label="Username"
									value={username}
									onChangeText={(username) => setUsername(username)}
									mode="flat"
									textContentType="username"
									style={styles.textinput}
									returnKeyType="next"
									ref={usernameRef}
									onSubmitEditing={() => emailRef.current?.focus()}
									onChange={handleRegUser}
								/>
								<TextInput
									label="Email"
									value={email}
									onChangeText={(email) => setEmail(email)}
									mode="flat"
									textContentType="emailAddress"
									style={styles.textinput}
									returnKeyType="next"
									ref={emailRef}
									onSubmitEditing={() => passwordRef.current?.focus()}
									onChange={handleRegEmail}
								/>
								<TextInput
									label="Password"
									value={password}
									onChangeText={(password) => setPassword(password)}
									mode="flat"
									secureTextEntry={true}
									textContentType="password"
									style={styles.textinput}
									returnKeyType="next"
									ref={passwordRef}
									onSubmitEditing={() => passwordRepeatRef.current?.focus()}
									onChange={handleRegPW}
								/>
								<TextInput
									label="Repeat Password"
									value={passwordRepeat}
									onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
									mode="flat"
									secureTextEntry={true}
									textContentType="newPassword"
									style={styles.textinput}
									returnKeyType="go"
									ref={passwordRepeatRef}
									onSubmitEditing={toRegister}
								/>
							</View>
							<Button
								mode="contained"
								color="red"
								style={{ borderRadius: 25, marginTop: 30 }}
								// onPress={() => navigation.navigate("Log In")}
								onPress={toRegister}
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
		backgroundColor: "#2E424D",
		alignItems: "center",
		justifyContent: "center",
	},
	safeAreaContainer: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "#2E424D",
	},
	scrollView: {
		backgroundColor: "#2E424D",
	},
	containerScrollView: {
		flex: 1,
		alignItems: "center",
	},
	inner: {
		alignItems: "center",
		justifyContent: "center",
	},
	textinput: {
		width: 300,
		marginBottom: 10,
	},
	image: {
		height: 90,
		width: 220,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Signup;
