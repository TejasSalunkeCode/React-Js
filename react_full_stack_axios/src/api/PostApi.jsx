import axios from "axios";

const api=axios.create({
    baseURL :"https://jsonplaceholder.typicode.com"
}); 

//get meathod
export const getPost=()=>{
    return api.get("/posts")
}

//delete meathod
export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`)
}

//post data
export const postdata=(post)=>{
    return api.post("/posts",post);
}