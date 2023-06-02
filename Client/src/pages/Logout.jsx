import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'
import { useEffect } from 'react'
import { useAuth } from '../context/auth'


function Logout() {
	const navigate = useNavigate()
	const [user, dispatch] = useAuth();

	useEffect(() => {
		authService.logout()
		dispatch({ type: 'LOGOUT' })
		navigate("/signin")
	}, [])

	return null
}

export default Logout
