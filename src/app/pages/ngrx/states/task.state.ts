import { Task } from "../models/task.model";

export interface taskState{
    task?: Task,
    tasks?: Task[],
    loading: boolean,
    isSuccess: boolean,
    error: string,
}