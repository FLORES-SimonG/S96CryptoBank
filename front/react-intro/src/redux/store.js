import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';

const store = configureStore({
    reducer: {
        // ¿quien es mi reducer?
        actualUser: userSlice
        

    },
})

export default store;