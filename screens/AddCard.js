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
	Image,
} from "react-native";
import { Button, TextInput } from 'react-native-paper';

const NewCard = ({ navigation }) => {
	const [taskname, settaskname] = React.useState("");
	const [taskdesc, settaskdesc] = React.useState("");

	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.containerScrollView}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.container}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							<TextInput
								label="Task Name"
								value={taskname}
								onChangeText={text => settaskname(text)}
								style={styles.textinput}
							/>
							<TextInput
								label="Description"
								value={taskdesc}
								onChangeText={text => settaskdesc(text)}
								style={styles.textinput}
							/>
							<Button
								mode="contained"
								color="red"
								style={{ borderRadius: 25, marginTop: 30 }}
							>
								Add Card
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
		margin: 15,
	},
	image: {
		height: 90,
		width: 220,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default NewCard;
