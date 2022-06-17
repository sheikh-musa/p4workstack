import React, { useState, useContext } from "react";
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
import AuthContext from "../context/AuthContext";
const axios = require("axios").default;
const instance = axios.create({
	// baseURL: "https://sdic4g5.herokuapp.com/",
	baseURL: "http://192.168.50.35:3001",
});

const EditAccount = ({ navigation }) => {
	const user = useContext(AuthContext);
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState("");
	const [passwordRepeat, setPasswordRepeat] = useState("");
	const usernameRef = React.useRef();
	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const passwordRepeatRef = React.useRef();

	function saveDetails() {
		instance
			.post("/update", {
				username: username,
				email: email,
				password: password,
				id: user.id,
			})
			.then(function (response) {
				console.log(response.data.data);
				user.email = user.setEmail(response.data.data.email);
				user.username = user.setUsername(response.data.data.username);
				user.id = user.setId(response.data.data.id);
				user.firstName = user.setFirstName(response.data.data.firstName);
				user.lasstName = user.setLastName(response.data.data.lasstName);
				navigation.navigate("My Account");
			})
			.catch(function (error) {
				console.log(error.response.request._response);
				alert(JSON.parse(error.response.request._response).message);
			});
	}

	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.containerScrollView}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.container}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							<Image
								style={{
									marginRight: 10,
									marginBottom: -11,
									height: 120,
									width: 120,
								}}
								source={require("../assets/avatar.png")}
							/>
							<Image
								style={{
									height: 90,
									width: 250,
								}}
								source={require("../assets/editacc.png")}
							/>
							<Text style={styles.title}>Edit Account Page</Text>
							<View>
								<TextInput
									label="Username"
									value={username}
									onChangeText={(username) => setUsername(username)}
									mode="flat"
									style={styles.textinput}
									returnKeyType="next"
									ref={usernameRef}
									onSubmitEditing={() => emailRef.current?.focus()}
								/>
								<TextInput
									label="Email"
									value={email}
									onChangeText={(email) => setEmail(email)}
									mode="flat"
									style={styles.textinput}
									returnKeyType="next"
									ref={emailRef}
									onSubmitEditing={() => passwordRef.current?.focus()}
								/>
								<TextInput
									label="Password"
									placeholder="Leave blank to keep current password"
									value={password}
									onChangeText={(password) => setPassword(password)}
									mode="flat"
									secureTextEntry={true}
									style={styles.textinput}
									returnKeyType="next"
									ref={passwordRef}
									onSubmitEditing={() => passwordRepeatRef.current?.focus()}
								/>
								<TextInput
									label="Repeat Password"
									value={passwordRepeat}
									onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
									mode="flat"
									secureTextEntry={true}
									style={styles.textinput}
									returnKeyType="done"
									ref={passwordRepeatRef}
								/>
							</View>
							<Button
								mode="contained"
								color="#FCC666"
								style={{ borderRadius: 25, marginTop: 30 }}
								onPress={saveDetails}
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
		backgroundColor: "#EF4B4C",
		justifyContent: "center",
		alignItems: "center",
	},
	safeAreaContainer: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "#EF4B4C",
	},
	scrollView: {
		backgroundColor: "#EF4B4C",
		marginHorizontal: 20,
	},
	containerScrollView: {
		flex: 1,
		alignItems: "center",
	},
	inner: {
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051C60",
		margin: 20,
	},
	textinput: {
		width: 300,
		marginBottom: 10,
	},
});

export default EditAccount;
