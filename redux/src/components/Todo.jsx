import { useSelector,useDispatch } from "react-redux"
import { MdDeleteForever } from "react-icons/md"
import { useState } from "react"
import { addTask, fetchTask } from "../Store";
import { deleteTask } from "../Store";
export const Todo=()=>{

    const[tasks,setTask]=useState("");

    const task=useSelector((state)=>state.task)
    // console.log("react-state",state.task);
    
    const dispatch=useDispatch();

    const handleformsubmit=(e)=>{
        e.preventDefault();
        if(task.trim()){
            dispatch(addTask(tasks));
            return setTask("");
        }
    }
    
    const handleTaskDelete=(id)=>{
         return dispatch(deleteTask(id));
    }  

    const handleFetchTask=()=>{
        dispatch(fetchTask());
    }

    return(
        <div className="container">
        <div className="todo-app">
        <h1>
            <li className="fa-regular fa-pen-to-square"></li>
            To-do List
        </h1>
        <div className="row">
            <form onSubmit={handleformsubmit}>
                <input type="text" id="input-box" placeholder="Add a new task" value={tasks} onChange={(e)=>setTask(e.target.value)}/>
                <button>Add Task</button>
                <button onClick={handleFetchTask}>Fetch Task</button>

            </form>
        </div>
        <ul id="list-container">
            {
                task.map((curTask,index)=>{
                    return(
                      <li key={index}>
                        <p>{index} : {curTask}</p>
                        <MdDeleteForever className="icon-style" onClick={()=>handleTaskDelete(index)}/>
                      </li>  
                    )
                })
            }
        </ul>
        </div>
        </div>
    )
}