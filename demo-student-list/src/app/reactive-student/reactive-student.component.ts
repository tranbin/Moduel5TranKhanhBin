import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reactive-student',
  templateUrl: './reactive-student.component.html',
  styleUrls: ['./reactive-student.component.css']
})
export class ReactiveStudentComponent implements OnInit {
  formCreateStudent: FormGroup;

  constructor(private studentService : StudentService,
              private router : Router) {
  }

  ngOnInit(): void {
    this.formCreateStudent = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      age: new FormControl('', [Validators.required, Validators.min(10)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")]),
      mark: new FormControl(''),
      avatar: new FormControl('')
    })
  }
  createStudent(){
    this.studentService.addNewStudent(this.formCreateStudent.value);
    this.router.navigateByUrl("");
  }

}
