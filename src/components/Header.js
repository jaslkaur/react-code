import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { authActions } from '../store/auth';

const Header = () => {
    const dispatch = useDispatch();
const buttonClick = () =>{
    dispatch(authActions.logOut());
}

const isAuth = useSelector(state => state.auth.isAuth);
return (
    <React.Fragment>
    <h2>Hello</h2>
    {isAuth && <button onClick={buttonClick}>LogOut</button>}
    </React.Fragment>
);
};

export default Header;