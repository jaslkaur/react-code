import { useDispatch } from "react-redux"; 
import { authActions } from '../store/auth';

const Auth = () => {
    const dispatch = useDispatch();
const buttonClick = () =>{
    dispatch(authActions.logIn());
}

return (
    <button onClick={buttonClick}>LogIn</button>
);
};

export default Auth;