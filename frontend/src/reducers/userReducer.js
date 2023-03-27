import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    token:"",
    loading:false,
    message:""
}


export const userReducer = createSlice({
    name:"user",
    initialState,
    reducers:{
        register:(state,action)=>{
            console.log(action.payload,"<------Payload Userreducer.js");
            state.message=action.payload.message
        },
        login:(state,action)=>{
            console.log(action.payload,"action.payload , userReducer");
            state.token=action.payload.token
            localStorage.setItem("token",state.token)
        }
    }
   

        
})





export const {register,login}=userReducer.actions
export default userReducer.reducer
