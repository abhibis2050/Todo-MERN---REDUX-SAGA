// import axios from "axios"
const baseurl = "http://localhost:5000/api"


export const register_api = async(body)=>{
    const res= await fetch(`${baseurl}/user/register`,{
        method: "post",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body),
    })
    const result = await res.json()
    // console.log(result,"api call value");
    return result

}



export const login_api = async(body)=>{
  const res = await fetch(`${baseurl}/user/login`,{
    method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
  })
  const result = await res.json()
  console.log(result,"<------------api call value");
  return result
}


export const createTodo_api = async(body)=>{
  const res = await fetch(`${baseurl}/todo/createTodo`,{
    method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body),
  })
  const result = await res.json()
  console.log(result,"<------------api call value");
  return result
}


export const getTodo_api = async()=>{
  const res = await fetch(`${baseurl}/todo/gettodo`,{
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  const result = await res.json()
  // console.log(result);
  return result
}


export const deleteTodo_api = async(id)=>{
  // console.log(id);
  const res = await fetch(`${baseurl}/todo/remove/${id}`,{
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  const result = await res.json()
  console.log(result,"<------------api call value");
  return result
}




