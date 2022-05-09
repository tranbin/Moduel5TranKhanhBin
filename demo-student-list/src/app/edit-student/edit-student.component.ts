import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentService} from "../student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: IStudent | undefined;

  constructor(private studentService : StudentService,
              private activatedRouter : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      // @ts-ignore
      this.student = this.studentService.findStudentById(param.get('id'));
    })
  }

}
