import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { BoardRepository, Board } from 'react-native-draganddrop-board';
import datainfo from './data';

//this is important 
const boardRepository = new BoardRepository(datainfo);

const MainPage = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<Board
				boardRepository={boardRepository}
				open={(item) => { console.log("edit card function to be added here") }}
				onDragEnd={(srcColumn, destColumn, draggedItem) => { console.log(srcColumn, destColumn, draggedItem) }}
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
		color: '#051C60',
		margin: 20,
	},
});

export default MainPage;
