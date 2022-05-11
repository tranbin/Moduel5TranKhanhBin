import {Injectable} from '@angular/core';
import {IStudent} from "./model/IStudent";
import {StudentDAO} from "./dao/StudentDAO";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  URL_API = "http://localhost:3000/students";

  constructor(private httpClient: HttpClient) {
  }

  getAllStudent(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.URL_API)
  }

  addNewStudent(student: IStudent): Observable<any> {
    return this.httpClient.post(this.URL_API, student);
  }

  findStudentById(id: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>(this.URL_API + "/" + id);
  }

  deleteById(id: number) {
    return this.httpClient.delete(this.URL_API + "/" + id);

  }

  updateStudent(student: IStudent): Observable<void> {
    return this.httpClient.patch<void>(this.URL_API + "/" + student.id, student);
  }
}
