// import { NavigationContainer } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Button } from 'react-native-paper';

// const MainPage = ({ navigation }) => {
// 	return (
// 		<View style={styles.container}>
// 			<Text>MAIN PAGE</Text>
// 			<Button
// 				mode='contained'
// 				color='#FCC666'
// 				style={{ borderRadius: 25, marginTop: 30 }}
// 				onPress={() => navigation.navigate('add-card')}
// 			>
// 				Add Card
// 			</Button>
// 			<Button
// 				mode='contained'
// 				color='#2E424D'
// 				style={{ borderRadius: 25, marginTop: 30 }}
// 				onPress={() => navigation.navigate('acc-details')}
// 			>
// 				Back to My Account
// 			</Button>
	
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#EF4B4C',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	title: {
// 		fontSize: 24,
// 		fontWeight: 'bold',
// 		color: '#051C60',
// 		margin: 20,
// 	},
// });

// export default MainPage;

import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Modal, Portal, Provider, TextInput, Switch  } from 'react-native-paper';

const MainPage = ({ navigation }) => {


     // >>>>> ADD-CARD/ EDIT-CARD CODEBLOCK(i) begins <<<<<<<< 
            const [visible, setVisible] = React.useState(false);
        
            //modal popup
            const showModal = () => setVisible(true);
            const hideModal = () => setVisible(false);
            
            //form field
            const containerStyle = {backgroundColor: 'white', padding: 20};
            const [title, setTitle] = React.useState("");
			const [deadline, setDeadline] = React.useState("");
            const [description, setDescription] = React.useState("");

     // >>>>> ADD-CARD/ EDIT-CARD CODEBLOCK(i) ends <<<<<<<< 
    


    
     return (
        <View style={styles.container}>
            <Text>MAIN PAGE</Text>
            {/* <Button
                mode='contained'
                color='#FCC666'
                style={{ borderRadius: 25, marginTop: 30 }}
                onPress={() => navigation.navigate('add-card')}
            >
                Add Card
            </Button> */}
            <Button
                mode='contained'
                color='#2E424D'
                style={{ borderRadius: 25, marginTop: 30 }}
                onPress={() => navigation.navigate('acc-details')}
            >
                Back to My Account
            </Button>




{/* >>>>> ADD-CARD/ EDIT-CARD CODEBLOCK(ii) begins <<<<<<<<  */}
    <Provider>
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Edit Task Details...</Text>   
            <TextInput
                label="Title"
                value={title}
                onChangeText={text => setTitle(text)}
            />          
            <TextInput
                label="Deadline"
                value={deadline}
                onChangeText={text => setDeadline(text)}
            />
            <TextInput
                label="Description"
                value={description}
                onChangeText={text => setDescription(text)}
            />
			        <Button
            mode='contained'
            color='#EF4B4C'
            style={{ borderRadius: 25, marginTop: 30 }}
            onPress={() => navigation.navigate('main-page')}
        >
            Save Card - go to Boards
        </Button>
            </Modal>
        </Portal>
        <Button
            mode='contained'
            color='#FCC666'
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
            backgroundColor: '#EF4B4C',
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








