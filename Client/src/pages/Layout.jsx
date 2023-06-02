import { Outlet, Link } from 'react-router-dom'
import Cart from '../components/commons/Cart'
import { Flex, Spacer } from '@chakra-ui/react'
import { useAuth } from '../context/auth';



function Layout() {
	const [user, dispatch] = useAuth();
	console.log(user);
	return (
		<>
			
			<Flex direction="row" justifyContent="" alignItems="left">
			
				{!user.isAuth ? (
					<>
						<Link to="/signin"> logear </Link>
						<Link to="/signup"> registrarse </Link>
					</>
				) : (
					<Link to="/logout" > cerrar sesion</Link>

				)}
				<Link to="/products">Productos</Link>
				<Cart />
			</Flex>
			<Outlet />
		</>
	)
}

export default Layout