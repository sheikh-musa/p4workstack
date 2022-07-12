import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.50.35:3001/";
// const API_URL = "https://sdic4g5.herokuapp.com/";

const register = (values) => {
	const { username, email, password, firstName, lastName } = values;
	return axios.post(API_URL + "register", {
		username,
		email,
		password,
		firstName,
		lastName,
	});
};

const login = async (values) => {
	const { login, password } = values;
	const response = await axios.post(API_URL + "login", {
		login,
		password,
	});
	if (response.data.message == "Login successful") {
		// localStorage.setItem("user", JSON.stringify(response.data.data));
		// reactLocalStorage.setObject("user", response.data.data);
		await AsyncStorage.setItem("user", JSON.stringify(response.data.data));
		console.log(response.data.message);
	} else {
		console.log(response.data);
	}
	return response.data;
};

const update = async (values) => {
	const { id, username, email, password } = values;
	return axios.post(API_URL + "update", {
		email,
		password,
		username,
		id,
	});
};

const board = async (board, token) => {
	return axios.put(API_URL + "board", {
		board: board,
		token: token,
	});
};

const logout = async () => {
	// localStorage.removeItem("user");
	// reactLocalStorage.remove("user");
	AsyncStorage.removeItem("user");
	const response = await axios.post(API_URL + "signout");
	return response.data;
};

const getCurrentUser = () => {
	return JSON.parse(AsyncStorage.getItem("user"));
	// return JSON.parse(localStorage.getItem("user"));
	// if (Object.keys(reactLocalStorage.getObject("user")) != 0)
	// 	return reactLocalStorage.getObject("user");
	// else {
	// 	return null;
	// }
};

const setUser = (key, value) => {
	reactLocalStorage.setObject(key, value);
};

const AuthService = {
	register,
	login,
	logout,
	getCurrentUser,
	update,
	board,
	setUser,
};

export default AuthService;
