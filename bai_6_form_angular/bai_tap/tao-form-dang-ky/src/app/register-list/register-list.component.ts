import {Component, OnInit} from '@angular/core';
import {IRegister} from "../../models/IRegister";
import {RegisterDAO} from "../../dao/RegisterDAO";

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {
  registers: IRegister[] = RegisterDAO.registerDao;
  registerList: IRegister | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getRegister(register: IRegister) {
    this.registerList = register;
  }

  updateRegister(register: IRegister) {
    this.registerList = register;
  }
}
