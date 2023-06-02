import Form from '../components/commons/Form';
import productServices from '../services/productServices';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const [user, dispatch] = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    console.log(data);
    productServices.createProduct(data).then(decodedToken => {
      
      dispatch({
        type: "PRODUCT_CREATED",
        payload: decodedToken
      });

      navigate("/products")

    })
  }

  return (
    <Form
      inputs={[
        { name: 'titulo', label: 'Titulo' },
        { name: 'descripcion', label: 'Descripcion' },
        { name: 'precio', label: 'Precio' },
        { name: 'categoria', label: 'Categoria' },
      
      ]}
      header="Create New Product"
      onSubmit={handleSubmit}
      submitLabel="Submit"
    />
  )

}
export default CreateProduct