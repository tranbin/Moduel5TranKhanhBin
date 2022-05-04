import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterDAO} from "../../dao/RegisterDAO";


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  formCreateRegister: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formCreateRegister = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        pwGroup: new FormGroup({
          password: new FormControl(''),
          confirmPassword: new FormControl('')
        }, comparePassword),
        country: new FormControl('',[Validators.required]),
        age: new FormControl('',[Validators.required,Validators.min(18)]),
        gender: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required,Validators.pattern(" /^\\+84\\d{9,10}$/")])
      }
    )
  }


  /*
  *  email : string,
    password : string,
    confirmPassword : string,
    country : string,
    age : number,
    gender : string,
    phone : string*/
  createRegister() {
    RegisterDAO.registerDao.push(this.formCreateRegister.value);
    this.formCreateRegister.reset();
  }

  get getPassword() {
    return this.formCreateRegister.get("password").value;
  }

}

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {passwordnotmatch: true};
}

