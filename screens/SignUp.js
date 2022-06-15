import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Signup = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	return (
			<View style={styles.container}>
				<Image
          	  	  style={{
              	  height: 90,
              	  width: 220 }}
          	  	  source={require("../assets/avatar2.png")}
        		/>
				<Image
          	  	  style={{
              	  height: 90,
              	  width: 220 }}
          	  	  source={require("../assets/createacc.png")}
        		/>
		
					<View>
						<TextInput
							label='First Name'
							value={firstName}
							onChangeText={(firstName) => setFirstName(firstName)}
							mode='outlined'
							style={styles.textinput}
						/>
						<TextInput
							label='Last Name'
							value={lastName}
							onChangeText={(lastName) => setLastName(lastName)}
							mode='outlined'
							style={styles.textinput}
						/>
						<TextInput
							label='Username'
							value={username}
							onChangeText={(username) => setUsername(username)}
							mode='outlined'
							style={styles.textinput}
						/>
						<TextInput
							label='Email'
							value={email}
							onChangeText={(email) => setEmail(email)}
							mode='outlined'
							style={styles.textinput}
						/>
						<TextInput
							label='Password'
							value={password}
							onChangeText={(password) => setPassword(password)}
							mode='outlined'
							style={styles.textinput}
						/>
						<TextInput
							label='Repeat Password'
							value={passwordRepeat}
							onChangeText={(passwordRepeat) =>
								setPasswordRepeat(passwordRepeat)
							}
							mode='outlined'
							style={styles.textinput}
						/>
					</View>
					<Button
						mode='contained'
						color='#EF4B4C'
						style={{ borderRadius: 25, marginTop: 10 }}
						onPress={() => navigation.navigate('log-in')}
					>
						Create Account - go to login
					</Button>
				</View>
			
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2E424D',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 60,
		paddingBottom: 100,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		margin: 20,
	},
	textinput: {
		width: 300,
		marginBottom: 10,
	},
});

export default Signup;
