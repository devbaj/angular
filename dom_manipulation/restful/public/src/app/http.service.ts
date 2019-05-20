import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http : HttpClient ) {
  }

  getTasks( ) {
    return this._http.get( '/tasks' ) ;
  }

  getOneTask(taskId: string) {
    return this._http.get( `/tasks/${taskId}`);
  }

  addTask(newTask: any) {
    return this._http.post('/tasks', newTask);
  }

  updateTask(task: any) {
    return this._http.put(`/tasks/${task._id}`, task);
  }

  removeTask(taskid: string) {
    return this._http.delete(`/tasks/${taskid}`);
  }
}
