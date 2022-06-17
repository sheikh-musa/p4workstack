import React, { useState, useEffect, useContext } from "react";
import {
	StyleSheet,
	Text,
	View,
	Alert,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import loginImg from "../assets/login.png";
import AuthContext from "../context/AuthContext";

const axios = require("axios").default;
const instance = axios.create({
	// baseURL: "https://sdic4g5.herokuapp.com/",
	baseURL: "http://192.168.50.35:3001",
});

// const [signIn, setSignIn] = React.useState(false);
// const [board, setBoard] = React.useState([]);
// const [token, setToken] = React.FragmentuseState("");
// const userSignIn = ({ board, token }) => {
// 	setBoard(board);
// 	setToken(token);
// 	setSignIn(true);
// };

const Login = ({ route, navigation }) => {
	const userContext = useContext(AuthContext);
	// const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	// const [logErr, setLogErr] = useState("");
	// const [show, setShow] = useState(false);
	const usernameRef = React.useRef();
	const passwordRef = React.useRef();

	function handleClose() {
		// setShow(false);
		// setLogErr("");
		setUsername("");
		setPassword("");
	}

	useEffect(() => {
		if (route.params?.message != undefined) {
			alert(route.params?.message);
		}
	});

	// const handleShow = () => setShow(true);

	// const loginUser = (event) => {
	// 	setUsername(event.target.value);
	// 	console.log("username is", event.target.value);
	// };

	// const loginPassword = (event) => {
	// 	setPassword(event.target.value);
	// 	console.log("password is", event.target.value);
	// };

	const toLogin = (event) => {
		// event.preventDefault();
		console.log("username 👉️", username);
		console.log("password 👉️", password);
		instance
			.post("/login", {
				username: username,
				password: password,
			})
			.then(function (response) {
				console.log(response.data.data);
				userContext.email = response.data.data.email;
				userContext.username = response.data.data.username;
				userContext.firstName = response.data.data.firstName;
				userContext.lastName = response.data.data.lastName;
				handleClose();
				navigation.navigate("MainDrawer");
			})
			.catch(function (error) {
				console.log(error.response.request._response);
				// console.log(JSON.parse(error.response.request._response).message);
				alert(JSON.parse(error.response.request._response).message);
				// setLogErr(error.response.data.message);
			});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<Image style={styles.loginImage} source={loginImg} />
					<View>
						<TextInput
							label="Username"
							value={username}
							onChangeText={(username) => setUsername(username)}
							mode="outlined"
							style={styles.textinput}
							returnKeyType="next"
							ref={usernameRef}
							onSubmitEditing={() => passwordRef.current?.focus()}
						/>
						<TextInput
							label="Password"
							value={password}
							onChangeText={(password) => setPassword(password)}
							mode="outlined"
							style={styles.textinput}
							secureTextEntry={true}
							returnKeyType="go"
							ref={passwordRef}
						/>
						<Text
							style={styles.tinytext}
							onPress={() =>
								Alert.alert("Reset Password", "Confirm reset password?", [
									{
										text: "Cancel",
									},
									{
										text: "Reset",
									},
								])
							}
						>
							Forgot Password?
						</Text>
					</View>

					<View style={{ flexDirection: "row", justifyContent: "center" }}>
						<Button
							mode="contained"
							color="#EF4B4C"
							style={{ borderRadius: 25, marginTop: 30, marginRight: 5 }}
							onPress={() => navigation.navigate("Sign Up")}
						>
							Sign up
						</Button>
						<Button
							mode="contained"
							color="#2E424D"
							style={{ borderRadius: 25, marginTop: 30, marginLeft: 5 }}
							onPress={toLogin}
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
		backgroundColor: "#FCC666",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051C60",
		paddingBottom: 10,
	},
	tinytext: {
		fontSize: 12,
		marginTop: 5,
		alignSelf: "center",
	},
	loginImage: {
		height: 90,
		width: 220,
	},
	textinput: {
		width: 200,
		alignSelf: "center",
	},
});

export default Login;
