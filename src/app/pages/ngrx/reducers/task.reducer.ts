import { createReducer, on } from "@ngrx/store";
import { Task } from "../models/task.model";
import { TaskAction } from "../actions/task.action";
import { taskState } from "../states/task.state";
import { Action } from "rxjs/internal/scheduler/Action";


const initialState: taskState ={
    loading: false,
    isSuccess: false,
    error: '',
}

export const taskReducer = createReducer (
    initialState,
    on(TaskAction.addTask,(state) => {
        return {
            ...state,
            loading:true,
        }
    }),

    on(TaskAction.addSuccess, (state) =>{
        return{
            ...state,
            loading: false,
            isSuccess: true,
        }
    }),

    on(TaskAction.addFail, (state, action) => {
        return{
            ...state,
            error: action.error,
        }
    }),

    on(TaskAction.getAllTask, (state) =>{
        return {
            ...state,
            loading:true,
        }
    }),

    on(TaskAction.getAllSuccess, (state, action) =>{
        return {
            ...state,
            loading:false,
            tasks: action.tasks,
        }
    }),

    on(TaskAction.getAllFail, (state, action) =>{
        return {
            ...state,
            loading:false,
            error: action.error
        }
    }),

    on(TaskAction.deleteTask, (state) =>{
        return {
            ...state,
            loading:true,
        }
    }),

    on(TaskAction.deleteSuccess, (state) =>{
        return {
            ...state,
            loading: false,
            isSuccess: true,
        }
    }),

    on(TaskAction.deleteFail, (state, action) =>{
        return {
            ...state,
            loading: false,
            error: action.error,
        }
    }),


    on(TaskAction.updateTask, (state) => {
        return{
            ...state,
            loading: true,
        }
    }),

    on(TaskAction.updateSuccess, (state) => {
        return{
            ...state,
            loading: false,
            isSuccess: true,
        }
    }),

    on(TaskAction.updateFail, (state, action) => {
        return{
            ...state,
            loading: false,
            error: action.error,
        }
    }),
)