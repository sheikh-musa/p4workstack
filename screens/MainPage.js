import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, Modal, Portal, Provider, TextInput, Switch } from "react-native-paper";
import { BoardRepository, Board } from "react-native-draganddrop-board";
import datainfo from "./data";
import AuthContext from "../context/AuthContext";

//this is important
let boardRepository = new BoardRepository(datainfo);
let data2 = datainfo;

var cardObj = {
	"id": "",
	"cards":
	{
		"id": "",
		"title": "",
		"label": "",
		"description": "",
	}
};

const MainPage = ({ route, navigation }) => {
	const userContext = useContext(AuthContext);
	// >>>>> ADD-CARD/ EDIT-CARD CODEBLOCK(i) begins <<<<<<<<
	const [visible, setVisible] = React.useState(false);

	//modal popup
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);

	//form field
	const containerStyle = { backgroundColor: "white", padding: 20 };
	const [title, setTitle] = React.useState("");
	const [deadline, setDeadline] = React.useState("");
	const [description, setDescription] = React.useState("");

	// useEffect(() => {
	// 	hideModal();
	// }, [boardRepository]);

	// >>>>> ADD-CARD/ EDIT-CARD CODEBLOCK(i) ends <<<<<<<<

	return (
		<View style={styles.container}>
			<Board
				boardRepository={boardRepository}
				//Edit card's detail function
				open={(item) => {
					showModal();
					item.attribute.name = title;
					item.attributes.description = description;
				}}
				onDragEnd={(srcColumn, destColumn, item) => {
					console.log("Source Lane ID :" + srcColumn);
					// console.log("Destination Lane ID :" + destColumn);
					// console.log("ID :" + item.attributes.id);
					// console.log("Name :" + item.attributes.row.name);
					// console.log("Desc :" + item.attributes.row.description);

					//Start of Delete Card Function
					cardObj.id = srcColumn;
					cardObj.cards.id = item.attributes.id;
					//Call the Delete Statement here into database

					//End of Delete Card Function

					//Start of Add Card Function
					cardObj.id = destColumn;
					cardObj.cards.id = item.attributes.id;
					cardObj.cards.title = item.attributes.row.name;
					cardObj.cards.description = item.attributes.row.description;
					console.log(cardObj);
					//Call the insert statement here into database

					//End of Add Card Function
				}}
			/>
			{/* <Button
				mode="contained"
				color="#FCC666"
				style={{ borderRadius: 25, marginTop: 30 }}
				onPress={() => navigation.navigate("add-card")}
			>
				Add Card
			</Button> */}

			{/* >>>>> ADD-CARD/ EDIT-CARD CODEBLOCK(ii) begins <<<<<<<<  */}
			<Provider>
				<Portal>
					<Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
						<Text>Edit Task Details...</Text>
						<TextInput label="Title" value={title} onChangeText={(text) => setTitle(text)} />
						<TextInput
							label="Deadline"
							value={deadline}
							onChangeText={(text) => setDeadline(text)}
						/>
						<TextInput
							label="Description"
							value={description}
							onChangeText={(text) => setDescription(text)}
						/>
						<Button
							mode="contained"
							color="#EF4B4C"
							style={{ borderRadius: 25, marginTop: 30 }}
							onPress={hideModal}
						>
							Save Card
						</Button>
					</Modal>
				</Portal>
				<Button
					mode="contained"
					color="#FCC666"
					style={{ borderRadius: 25, marginTop: 30 }}
					onPress={showModal}
				>
					Add Card
				</Button>
			</Provider>

			{/* >>>>> ADD-CARD/ EDIT-CARD CODEBLOCK(ii) ends <<<<<<<<  */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#051C60",
		margin: 20,
	},
});

export default MainPage;
