import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../models/IStudent";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name : "Khánh Bin",
    age : 5 ,
    mark : 1,
    avatar :"https://media.istockphoto.com/photos/cute-panda-bear-climbing-in-tree-picture-id523761634?k=20&m=523761634&s=612x612&w=0&h=fycQb31QlRoNLdJWWddooJ94a-54YLYQ3ggTLPkhvmk="
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
