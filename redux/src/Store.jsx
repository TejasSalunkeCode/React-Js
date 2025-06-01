/* eslint-disable no-case-declarations */
import {applyMiddleware,createStore} from  "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";

const ADD_TASK="task/add";
const DELETE_TASK="task/delete";
const FETCH_TASK="task/fetch";

const intialState={
    task:[],
}
const taskReducer=(state=intialState,action)=>{

    switch(action.type){

        case ADD_TASK:
        return{
            ...state,
            task:[...state.task,action.payload],
        };

         case DELETE_TASK:
        const updatedTask=state.task.filter((curTask,index)=>{
                return index !== action.payload;
            })
        return{
            ...state,
            task:updatedTask,
        };

        case FETCH_TASK:
            return{
                ...state,
                task:[...state.task,...action.payload]
            }

        default:
           return state;
        
    }
};

export const store=createStore(taskReducer,composeWithDevTools(applyMiddleware(thunk)));
console.log(store);
console.log("intial State ",store.getState());


store.dispatch({type:ADD_TASK,payload : "Buy 1"})

// store.dispatch(addTask("Buy 1"))
console.log("Updated State ",store.getState());
 

// store.dispatch(addTask("Buy mango"))
store.dispatch({type:ADD_TASK,payload : "Buy mango"})
console.log("Updated State 2",store.getState());


store.dispatch({type:ADD_TASK,payload : "Buy java"})
store.dispatch({type:ADD_TASK,payload : "Buy python"})
store.dispatch({type:ADD_TASK,payload : "Buy c++"})


store.dispatch({type:DELETE_TASK,payload:1})
// store.dispatch(deleteTask(1))
console.log("Updated State 2",store.getState());



export const addTask=(data)=>{
    return ({type:ADD_TASK,payload :data});
};


export const deleteTask=(id)=>{
    return ({type:DELETE_TASK,payload :id});
};

export const fetchTask=()=>{
    return async(dispatch)=>{
        try{
            const res=await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=3"
            );
            const task=await res.json();
            dispatch({type:FETCH_TASK,payload:task.map((curTask)=>curTask.title)});
        }catch(e){
            console.log(e);
        }
    }
}