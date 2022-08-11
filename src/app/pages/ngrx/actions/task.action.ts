import { createAction, props } from "@ngrx/store";
import { Task } from "../models/task.model";

export const TaskAction = {
    addTask: createAction('[Task] Add task', props<{task:Task}>()),
    addSuccess: createAction('[Task] Add task success'),
    addFail: createAction('[Task] Add task failure', props<{error:string}>()),

    getAllTask: createAction('[Task] Get all tasks'),
    getAllSuccess: createAction('[Task] Get all tasks success', props<{tasks:Task[]}>()),
    getAllFail: createAction('[Task] Get all tasks failure', props<{error:string}>()),

    deleteTask: createAction('[Task] Delete task',props<{id:string}>()),
    deleteSuccess: createAction('[Task] Delete task successful'),
    deleteFail: createAction('[Task] Delete task failure', props<{error:string}>()),

    updateTask: createAction('[Task] Update task',props<{task:Task}>()),
    updateSuccess: createAction('[Task] Update task success' ),
    updateFail: createAction('[Task] Update task failure', props<{error:string}>()),
}