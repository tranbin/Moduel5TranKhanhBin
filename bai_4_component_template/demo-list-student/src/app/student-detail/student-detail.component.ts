import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from "../../models/IStudent";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input()
  student: IStudent | undefined;

  @Output("newStudent") onCreate = new EventEmitter<IStudent>();
/*
  @Output('editStudent') onUpdate = new EventEmitter<IStudent>()*/

  constructor() {
  }

  ngOnInit(): void {
  }

 /* edit() {

  }*/

  createStudent(id : string ,name: string, age: string, mark: string, avatar :string) {
    this.student = {id : parseInt(id),name : name, age:parseInt(age) , mark : parseInt(mark),avatar : avatar}
    console.log(this.student)

    this.onCreate.emit(this.student);
  }

 /* editStudent(id : string ,name: string, age: string, mark: string, avatar :string) {
    this.student = {id : parseInt(id),name : name, age:parseInt(age) , mark : parseInt(mark),avatar : avatar}

    this.onUpdate.
  }*/
}
