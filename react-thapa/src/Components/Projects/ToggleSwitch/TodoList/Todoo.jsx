import { useState } from "react";
import "./Todo.css";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import { events } from "multi-ui-cli/models/Component";
const todokey="reacttodo";
export const Todoo=()=>{
    const [inputValue,setInputValue]=useState("");

    // const getLocalStorag=()=>{
    //     const rawtodo=localStorage.getItem(todokey);
    //     if(!rawtodo) return [];
    //     return JSON.parse(rawtodo)
    // }
    const [task,setTask]=useState(/*()=>getLocalStorag()*/[]);
    const [datetime,setDateTime]=useState("");
    const handleInputChange=(value)=>{
        setInputValue(value);
    };
    const handleForSubmit=(event)=>{
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("");
            return;
        } 

        setTask((prev)=>[...prev,inputValue])

        setInputValue("");
    };
    
    setInterval(()=>{
        const now = new Date();
        const formattedDate=now.toLocaleDateString();
        const time=now.toLocaleTimeString();
        // console.log("heyy")
        
        setDateTime(`${formattedDate} ${time}`)
    },1000)


    const tododelete=(value)=>{
        console.log(task);
        console.log(value);
        const updatetask=task.filter((curTask)=>curTask!=value);
        setTask(updatetask);
    }

   const cleardata=()=>{
    
    setTask([]);
   }

   localStorage.setItem(todokey,JSON.stringify(task));

    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{datetime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleForSubmit}>
                 
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(events)=>handleInputChange(events.target.value)}/>
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>

            </section>
            <section className="myUnorderList">
                <ul>
                    {task.map((curTask,index)=>{
                        return(
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn"><FaCheck /></button>
                                <button className="delete-btn" onClick={()=>tododelete(curTask)}><MdDelete /></button>
                            </li>
                        )
                    })}
                    
                </ul>
            </section>
          <section>
              <button className="clear-btn" onClick={cleardata}>Clear All</button>
          </section>
        </section>
    );
};