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
import AuthService from "../services/auth.service";

const Login = ({ route, navigation }) => {
	const userContext = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const usernameRef = React.useRef();
	const passwordRef = React.useRef();

	function handleClose() {
		setUsername("");
		setPassword("");
	}

	const toLogin = (event) => {
		setMessage("");
		setLoading(true);
		if (username && password) {
			AuthService.login({
				login: username,
				password: password,
			}).then(
				() => {
					navigation.navigate("MainDrawer");
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					// setLoading(false);
					Alert.alert(resMessage);
				}
			);
		} else {
			Alert.alert("Enter username and password");
			setLoading(false);
		}
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
							label="Username/email"
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
						{/* <Text
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
						</Text> */}
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
