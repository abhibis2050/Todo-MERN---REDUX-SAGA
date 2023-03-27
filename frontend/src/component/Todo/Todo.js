import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"


const Todo = () => {
  const {todos}=useSelector((state)=>state.todo)
  // console.log(todos,"<------todo.js");
const [todo,setTodo]=useState("")

const dispatch = useDispatch();
const navigate = useNavigate();

 const addTodo = ()=>{
  dispatch({type:"CREATE_TODO",payload:{todo}})
 }

 useEffect(()=>{
  dispatch({
    type:"GET_TODO"
  })
 },[])


  return (
    <div>
      <input placeholder='Enter The Todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>addTodo()}>ADD TODO</button>
      <div>
       <ul>
       {
        todos.map((todoItem)=>{ 
          return  <li key={todoItem.Id} onDoubleClick={()=>dispatch({type:"DELETE_TODO",payload:todoItem._id})}>
            {todoItem.todo}
          </li>
           
        })}
       </ul>
      </div>
    </div>
  )
}

export default Todo