import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: IStudent;
  editForm: FormGroup;

  constructor(private studentService: StudentService,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.studentService.findStudentById(id).subscribe(next => {
        this.student = next;
        this.editForm.patchValue({
          id: this.student.id,
          name: this.student.name,
          age: this.student.age,
          gender: this.student.gender,
          phone: this.student.phone,
          mark: this.student.mark,
          avatar: this.student.avatar
        });
      });
    });
    this.editForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      age: new FormControl('', [Validators.required, Validators.min(10)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")]),
      mark: new FormControl(''),
      avatar: new FormControl('')
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
      this.student = this.editForm.value;
      this.studentService.updateStudent(this.student).subscribe(() => {
        },
        () => {
        },
        () => {
          this.router.navigateByUrl("");
        });
    }
  }

}
