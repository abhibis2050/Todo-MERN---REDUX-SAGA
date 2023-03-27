import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    todos:[],
    message:""
}

export const todoSlice = createSlice({
name:"todo",
initialState,
reducers:{
    createTodo:(state,action)=>{
        // console.log(action.payload,"todoReducer");
    state.todos.push(action.payload.data.todo)
    },
    getTodos:(state,action)=>{
        // console.log(action.payload.data,"<-----todoReducer");
        state.todos = action.payload.data
    }
}

})

export const {createTodo,getTodos} = todoSlice.actions
export default todoSlice.reducer