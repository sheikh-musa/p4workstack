import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/MainStackNavigator";
import AuthContext from "./context/AuthContext";

// const Drawer = createDrawerNavigator();

export default function App() {
	const [username, setUsername] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [password, setPassword] = React.useState("");
	const user = {
		username: username,
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
	};
	return (
		<AuthContext.Provider value={user}>
			<NavigationContainer>
				<MainStackNavigator />
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
