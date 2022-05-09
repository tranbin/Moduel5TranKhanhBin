import {Component, OnInit} from '@angular/core';
import {IStudent} from "../model/IStudent";
import {StudentDAO} from "../dao/StudentDAO";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] = StudentDAO.studentDao;
  studentDetail: IStudent | undefined;


  constructor() {
  }

  ngOnInit(): void {
  }

}
