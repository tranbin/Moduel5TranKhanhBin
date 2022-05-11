import {Component, OnInit} from '@angular/core';
import {IStudent} from "../model/IStudent";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: IStudent[];
  studentDetail: IStudent | undefined;


  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe((value) => {
        this.students = value;
      }
      , () => {
      },
      () => {
      })
  }

  deleteStudent(id: number) {
    this.studentService.deleteById(id).subscribe();
    this.ngOnInit();

  }
}
