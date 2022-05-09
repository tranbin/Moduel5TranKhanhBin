import {Component, OnInit} from '@angular/core';
import {IStudent} from "../model/IStudent";
import {StudentService} from "../student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: IStudent | undefined;

  constructor(private studentService: StudentService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      // @ts-ignore
      this.student = this.studentService.findStudentById(param.get('id'));
    })
  }


}
