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
  show: boolean;

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
      this.show = true;
    });
  }

  createTask() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe( data => console.log ('added', data) );
  }

}
