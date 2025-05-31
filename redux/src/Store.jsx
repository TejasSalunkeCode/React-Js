/* eslint-disable no-case-declarations */
import {createStore} from  "redux";
const ADD_TASK="task/add";
const DELETE_TASK="task/delete";

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

        default:
           return state;
        
    }
};

const store=createStore(taskReducer);
console.log(store);
console.log("intial State ",store.getState());


store.dispatch({type:ADD_TASK,payload : "Buy 1"})
console.log("Updated State ",store.getState());


store.dispatch({type:ADD_TASK,payload : "Buy mango"})
console.log("Updated State 2",store.getState());

store.dispatch({type:DELETE_TASK,payload:1})
console.log("Updated State 2",store.getState());