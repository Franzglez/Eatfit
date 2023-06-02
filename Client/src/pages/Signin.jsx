import Form from '../components/commons/Form'
import authService from '../services/authService';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

function CreateSignin() {
  const [user, dispatch] = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    authService.signin(data).then(decodedToken => {
      console.log(decodedToken);
      dispatch({
        type: "LOGIN",
        payload: decodedToken
      });

      navigate("/products")

    })
  }

  return (
    <Form
      inputs={[
        { name: 'username', label: 'Username' },
        { name: 'password', label: 'Password' },
      ]}
      header="Singin"
      onSubmit={handleSubmit}
      submitLabel="Submit"
    />
  )

}
export default CreateSignin