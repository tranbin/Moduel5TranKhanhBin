import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/Patient";
import {PatientService} from "../service/patient.service";

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patients: Patient[];

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe((value) => {
        this.patients = value;
      }
      , () => {
      },
      () => {
      })
  }
  deleteProduct(id : number){
    this.patientService.deleteProduct(id).subscribe(() => {
    }, () => {
    }, () => {
      this.ngOnInit();
    });
  }
}
