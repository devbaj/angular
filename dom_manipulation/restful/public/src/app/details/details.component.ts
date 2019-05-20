import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() oneTask: any;

  constructor(
    public _parent : AppComponent,
    private _httpService : HttpService
  ) { }

  ngOnInit() {
  }

  edit() {
    this._parent.editing = true;
  }

  updateOneTask() {
    let observable = this._httpService.updateTask(this.oneTask);
    observable.subscribe(data => {
      console.log(data);
      this.oneTask = data[`data`];
      this._parent.getTasksFromService();
    });
  }

  removeTask(taskid: string) {
    console.log('remove', taskid);
    let observable = this._httpService.removeTask(taskid);
    observable.subscribe(data => console.log(data));
    this._parent.getTasksFromService();
  }


}
