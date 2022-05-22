import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/Patient";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../service/patient.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patient: Patient;
  editForm: FormGroup;

  constructor(private patientService: PatientService,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.patientService.findPatientByIdProduct(id).subscribe(next => {
        this.patient = next;
        this.editForm.patchValue({
          id: this.patient.id,
          idProduct: this.patient.idProduct,
          idPatient: this.patient.idPatient,
          namePatient: this.patient.namePatient,
          dateGo: this.patient.dateGo,
          dateOut: this.patient.dateOut,
          reasonGo: this.patient.reasonGo,
          methodDoctor: this.patient.methodDoctor,
          doctor: this.patient.doctor
        });
      });
    });
    this.editForm = this.formBuilder.group({
      id : new FormControl(''),
      idProduct: new FormControl(''),
      idPatient: new FormControl(''),
      namePatient: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      dateGo: new FormControl('', [Validators.required]),
      dateOut: new FormControl('', [Validators.required]),
      reasonGo: new FormControl('', [Validators.required]),
      methodDoctor: new FormControl('', [Validators.required]),
      doctor: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.patient = this.editForm.value;
      this.patientService.updateProduct(this.patient).subscribe(() => {

        }, () => {
        },
        () => {
          this.router.navigateByUrl("");
        })
    }
  }

  xacNhan() {
    if (confirm("Are You Comback")){
      this.router.navigateByUrl("");
    }
  }
}
