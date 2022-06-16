import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {
	Button,
	Modal,
	Portal,
	Provider,
	TextInput,
	Switch,
} from 'react-native-paper';
import { BoardRepository, Board } from 'react-native-draganddrop-board';
import datainfo from './data';

const boardRepository = new BoardRepository(datainfo);

const MainPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Testing</Text>
			<Board
				boardRepository={boardRepository}
				open={(item) => {
					console.log('edit card function to be added here');
				}}
				onDragEnd={(srcColumn, destColumn, draggedItem) => {
					console.log(draggedItem);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'black',
		margin: 20,
	},
});

export default MainPage;
