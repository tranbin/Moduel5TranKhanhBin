import { Injectable } from '@angular/core';
import {IStudent} from "./model/IStudent";
import {StudentDAO} from "./dao/StudentDAO";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

    addNewStudent(student:IStudent){
    StudentDAO.studentDao.push(student);
  }

  findStudentById(id: number):IStudent {
    return StudentDAO.studentDao.find((student)=>student.id == id);
  }
}
