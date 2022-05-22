import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPatientComponent} from "./list-patient/list-patient.component";
import {EditPatientComponent} from "./edit-patient/edit-patient.component";


const routes: Routes = [{
  path: '', component: ListPatientComponent
}, {
  path: 'edit/:id', component: EditPatientComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
