import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

const App = () => {
  return (
    <React.Fragment>
      <BackwardCounter/>
      <ForwardCounter/>
    </React.Fragment>
  );
}

export default App;
