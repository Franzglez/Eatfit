import http from './httpServices'
import { decodeToken } from 'react-jwt'
import config from '../config.json'

const endpoint = config.apiURL 

function setJWT(jwt) {
	localStorage.setItem('token', jwt)
	http.setToken(jwt)
	return decodeToken(jwt)
}

async function signup(payload) {
	const { headers } = await http.post(endpoint + '/signup', payload)
	return setJWT(headers['x-auth-token'])
}

async function signin(payload) {
	const { headers } = await http.post(endpoint + '/signin', payload)
	return setJWT(headers['x-auth-token'])
}

function logout() {
	localStorage.removeItem('token')
}

function getCurrentUser() {
	try {
		const jwt = localStorage.getItem('token')

		if (!jwt) return null

		http.setToken(jwt)

		return decodeToken(jwt)
	} catch (err) {
		console.log(err)
	}
}

const authService = {
	signup,
	signin,
	logout,
	getCurrentUser,
}

export default authService
