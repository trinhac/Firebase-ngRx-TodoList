import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../services/task.service";
import { TaskAction } from "../actions/task.action";
import { from, switchMap, map, catchError, of } from "rxjs";
import { Task } from "../models/task.model";
import { taskState } from "../states/task.state";
import { Observable } from "rxjs";


@Injectable()
export class TaskEffect {
    constructor(private taskService: TaskService, private action$: Actions){}

    createTask$ = createEffect(() =>
        this.action$.pipe(
            ofType(TaskAction.addTask),
            switchMap((action) => from(this.taskService.add(action.task))),
            map(() => TaskAction.addSuccess()),
            catchError((error) => of(TaskAction.addFail({error: error})))
        )
    )

    getAllTask$ = createEffect(() =>
    this.action$.pipe(
        ofType(TaskAction.getAllTask),
        switchMap(() => this.taskService.getAll()),
        map((tasks) => TaskAction.getAllSuccess({tasks: tasks as Array<Task>})),
        catchError((error) => of(TaskAction.getAllFail({error: error})))
    )
)
    deleteTask$ = createEffect(() =>
    this.action$.pipe(
        ofType(TaskAction.deleteTask),
        switchMap((action) => from(this.taskService.delete(action.id))),
        map(() => TaskAction.deleteSuccess()),
        catchError((error) => of(TaskAction.deleteFail({error:error})))
    )
)
    
    updateTask$ = createEffect(() =>
    this.action$.pipe(
        ofType(TaskAction.updateTask),
        switchMap((action) => from(this.taskService.update(action.task))),
        map(() => TaskAction.updateSuccess()),
        catchError((error) => of(TaskAction.updateFail({error:error})))
    ) 
)
}