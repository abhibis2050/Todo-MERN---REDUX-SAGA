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
    },
    deleteTodos:(state,action)=>{
        console.log(action.payload,"<-----todoReducer");
        const resultedTodo = state.todos.filter((item)=>{
           return item._id===action.payload._id
        })
        state.todos=resultedTodo
    },
    logout:(state,action)=>{
        state.token = null
        localStorage.removeItem("token")
    }
}

})



export const {createTodo,getTodos,deleteTodos,logout} = todoSlice.actions
export default todoSlice.reducer