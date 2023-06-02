import Form from '../components/commons/Form';
import productServices from '../services/productServices';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';


function DeleteEdit() {
  const [user, dispatch] = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = ({id}) => {
    console.log(id);
    productServices.deleteProduct({id}).then(decodedToken => {
      
      dispatch({
        type: "PRODUCT_DELETED",
        payload: decodedToken
      });

      navigate("/products")

    })
  }

  return (
    <Form
      inputs={[
        {name: 'id', label: 'ID', },
        { name: 'titulo', label: 'Titulo' },
        { name: 'descripcion', label: 'Descripcion' },
        { name: 'precio', label: 'Precio',  },
        { name: 'categoria', label: 'Categoria' },
      
      ]}
      header="PRODUCT DELETED"
      onSubmit={handleSubmit}
      submitLabel="Submit"
    />
  )

}
export default DeleteEdit