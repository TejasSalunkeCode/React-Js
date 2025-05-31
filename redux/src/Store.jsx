/* eslint-disable no-case-declarations */
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