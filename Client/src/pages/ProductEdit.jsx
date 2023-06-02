import Form from '../components/commons/Form';
import productServices from '../services/productServices';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductEdit() {
    const { id } = useParams();
    console.log(id);
    const [user, dispatch] = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (data) => {
        productServices.updateProduct(data).then(decodedToken => {

            dispatch({
                type: "PRODUCT_UPDATED",
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
                { name: 'precio', label: 'Precio', },
                { name: 'categoria', label: 'Categoria' },

            ]}
            header="PRODUCT UPDATED"
            onSubmit={handleSubmit}
            submitLabel="Submit"
        />
    )
}
export default ProductEdit