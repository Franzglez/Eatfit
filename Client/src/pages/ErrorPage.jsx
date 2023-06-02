import { useRouteError } from 'react-router-dom'

function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<div id="error-page">
			<h1>OOPS! SOMETHING IS HAPPENING</h1>
			<p>Sorry, we are working to solve it.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default ErrorPage
