import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {}, //lo dejo vacio porque en el post de Login quiero saber si esta conectado el usuario o no
    userAppointments:[]// porque cuando hago get obtengo un array de objetos.
};



export const userSlice = createSlice({
    name: 'actualUser',
    initialState,
    reducers: { //propio de toolkit
        //! Actions:
        //! 1. setUserData
        setUser:(state,action)=>{ //* state = actualUser
            //aqui va la logica de la accion, te voy a dar las instrucciones
            //* me va a llegar un objeto
            //*Action: {type: setUserData, payload: {name: "Juan", email: " }
            state.userData = action.payload;
        },
        //! 2. setUserAppointments:
        setAppointments:(state,action)=>{//! por convencion se usa action y state
            state.userAppointments = action.payload;
        }
    }
});
export const {setUser, setAppointments} = userSlice.actions;
export default userSlice.reducer; //exporto el reducer para poder usarlo en el store.js