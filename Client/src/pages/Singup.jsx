import Form from '../components/commons/Form'
import authService from '../services/authService';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

function CreateSignup() {
  const [user, dispatch] = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    authService.signup(data).then(decodedToken => {
      console.log(decodedToken);
      dispatch({
        type: "LOGOUT",
        payload: decodedToken
      });

      navigate("/products")

    })
  }

  return (
    <Form
      inputs={[
        { name: 'name', label: 'Name' },
        { name: 'lastname', label: 'Lastname' },
        { name: 'username', label: 'Username' },
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' },
      ]}
      header="Create an account"
      onSubmit={handleSubmit}
      submitLabel="Submit"
    />
  )

}
export default CreateSignup