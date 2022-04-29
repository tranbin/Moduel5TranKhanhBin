import { Component, OnInit } from '@angular/core';
import {IStudent} from "../../models/IStudent";
import {StudentDAO} from "../../dao/StudentDAO";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students : IStudent[] = StudentDAO.studentDao;
  studentDetail : IStudent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getStudentDetail(student : IStudent){
    this.studentDetail = student;
  }

  getNewStudent(value: IStudent) {
    this.students.unshift(value);
  }
}
