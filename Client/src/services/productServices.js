import config from '../config.json'
import http from './httpServices';


const endpoint = config.apiURL + '/products';


function getAllProducts() {
	return http.get(endpoint)
}
function createProduct(payload) {
	return  http.post(endpoint + '/new', payload)
}
function updateProduct(payload) {
	return  http.post(endpoint + '/edit', payload)
}
function deleteProduct(payload) {
	return  http.post(endpoint + '/delete', payload)
}



const allEndPoints = {
	getAllProducts,
	updateProduct,
	createProduct,
	deleteProduct
}



export default allEndPoints


