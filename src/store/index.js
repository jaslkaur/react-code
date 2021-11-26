import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const storeObj = configureStore({
reducer:{counter:counterReducer,auth:authReducer}
});

export default storeObj;