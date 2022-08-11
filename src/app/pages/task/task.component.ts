import { Component, OnInit } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskAction } from '../ngrx/actions/task.action';
import { taskState } from '../ngrx/states/task.state';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task$: Observable<any>; 
  tasks$: Observable<any>;
  taskCollection = collection(this.firestore, 'tasks');
  taskCreateForm: FormGroup; 
  constructor(
    private store:Store<{task: taskState}>,
    private firestore: Firestore,
    private formBuilder: FormBuilder
  ) {
    this.taskCreateForm = this.formBuilder.group({
      title: new FormControl('',{
        validators: [Validators.required, Validators.minLength(5)],
      }),
      
      deadline: new FormControl (0)
    })

  this.task$ = this.store.select((state) => state.task.task);
  this.tasks$ = this.store.select((state) => state.task.tasks)
  }

  submit(){
    if (this.taskCreateForm.valid) {
      this.store.dispatch(TaskAction.addTask({task: this.taskCreateForm.value}))
    }
    else {
      alert('The title must have at least 5 character.')
    }
  }
  delete(id: string){
    this.store.dispatch(TaskAction.deleteTask({id: id}))
    alert('Xoa thanh cong')
  }

  // update(){
  //   this.store.dispatch(TaskAction.updateTask({}))
  // }
  ngOnInit(): void {
    this.store.dispatch(TaskAction.getAllTask());
  }
}
