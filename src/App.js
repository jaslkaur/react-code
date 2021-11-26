import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import User from './components/User';
import { useSelector } from 'react-redux';

const App = () => {

  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <User />}
      <Counter />
    </React.Fragment>
  );
}

export default App;