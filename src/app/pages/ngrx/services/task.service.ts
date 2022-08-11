import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";
import { Firestore, collection, addDoc, setDoc, doc, collectionData, deleteDoc, updateDoc } from "@angular/fire/firestore";



@Injectable({
    providedIn: 'root',
})

export class TaskService {
    constructor(private firestore: Firestore){}
    taskCollection = collection(this.firestore, 'tasks')
    add(task: Task): Promise<any>{
        let timestamp = new Date().getTime();
        return setDoc(doc(this.firestore,'tasks/' + timestamp),{
            ...task,
            id:timestamp,
        });
    }

    getAll(){
        return collectionData(this.taskCollection)
    }

    delete(id: string){
        return deleteDoc(doc(this.firestore, 'tasks/' + id));
    }

    update(task: Task){
        return setDoc(doc(this.firestore,'tasks/' + task.id), task);
    }
}
