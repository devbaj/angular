import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks = [];
  oneTask: any;
  newTask = {
    title: null,
    description: null
  };
  editing: boolean;

  constructor( private _httpService : HttpService) { }

  ngOnInit() {
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe( data => {
      console.log( 'component got tasks!' , data );
      this.tasks = data[`data`];
    } );
  }

  getTaskDetails(taskId) {
    let observable = this._httpService.getOneTask(taskId);
    observable.subscribe( data => {
      console.log( `got one task, id: ${taskId}` , data[`data`] );
      this.oneTask = data[`data`];
    });
  }

  createTask() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe( data => console.log ('added', data) );
  }

  edit() {
    this.editing = true;
  }

  updateOneTask() {
    let observable = this._httpService.updateTask(this.oneTask);
    observable.subscribe(data => {
      console.log(data);
      this.oneTask = data[`data`];
      for (let task in this.tasks) {
        if (task[`_id`] === data[`data`][`_id`]) {
          task = data[`data`];
        }
      }
    });
  }

  removeTask(taskid: string) {
    console.log('remove', taskid);
    let observable = this._httpService.removeTask(taskid);
    observable.subscribe(data => console.log(data));
  }

}
