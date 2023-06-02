import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout';
import Products from './pages/Products';
import ErrorPage from './pages/ErrorPage';
import Singup from './pages/Singup';
import Signin from './pages/Signin';
import Logout from './pages/Logout';
import ProductEdit from './pages/ProductEdit';
import DeleteEdit from './pages/DeleteEdit';
import FormProduct from './pages/FormProduct';
import ProtectedRoute from './utils/ProtectedRoute';



const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <p>esto</p>
			},

			{
				path: '/signup',
				element: (
					<ProtectedRoute role="notAuth">
						<Singup />
					</ProtectedRoute>

				),
			},
			{
				path: '/products',
				element: (
					<ProtectedRoute role="isAuth">
						<Products />
					</ProtectedRoute>

				),
			},
			{
				path: '/signin',
				element: (
					<ProtectedRoute role="notAuth">
						<Signin />
					</ProtectedRoute>


				),
			},
			{
				path: '/logout',
				element: (

					<Logout />

				),
			},
			{
				path: '/products/new',
				element: (

					<FormProduct />

				),
			},
			{
				path: '/products/edit/:id',
				element: (

					<ProductEdit />

				),
			},
			{
				path: '/products/delete/:id',
				element: (

					<DeleteEdit />

				),
			},




		]

	},

])


export default router