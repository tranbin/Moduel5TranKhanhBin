import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../../model/Patient";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  URL_API = "http://localhost:3000/patients";

  constructor(private httpClient: HttpClient) {
  }

  getAllPatient(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.URL_API);
  }

  findPatientByIdProduct(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(this.URL_API + '/' + id);
  }

  updateProduct(a: Patient): Observable<void> {
    return this.httpClient.patch<void>(this.URL_API + '/' + a.id, a);
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API + '/' + id);
  }
}
