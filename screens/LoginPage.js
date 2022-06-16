import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	return (
		<View style={styles.container}>
	
			<Image
          	  style={{
              height: 90,
              width: 220 }}
          	  source={require("../assets/login.png")}
        	/>
			<View>
				<TextInput
					label='Username'
					value={username}
					onChangeText={(username) => setUsername(username)}
					mode='outlined'
					style={{ width: 200 }}
				/>
				<TextInput
					label='Password'
					value={password}
					onChangeText={(password) => setPassword(password)}
					mode='outlined'
					style={{ width: 200 }}
					secureTextEntry={true}
				/>
				<Text></Text>
				<Text
					style={styles.tinytext}
					onPress={() =>
						Alert.alert('Reset Password', 'Confirm reset password?', [
							{
								text: 'Cancel',
							},
							{
								text: 'Reset',
							},
						])
					}
				>
					Forgot Password?
				</Text>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<Button
					mode='contained'
					color='#EF4B4C'
					style={{ borderRadius: 25, marginTop: 30, marginRight: 5 }}
					onPress={() => navigation.navigate('sign-up')}
				>
					Sign up
				</Button>
				<Button
					mode='contained'
					color='#2E424D'
					style={{ borderRadius: 25, marginTop: 30, marginLeft: 5 }}
					onPress={() => navigation.navigate('main-page')}
				>
					Login (MP)
				</Button>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCC666',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 100,
	},
	tinytext: {
		color:'white',
	}
});

export default Login;
