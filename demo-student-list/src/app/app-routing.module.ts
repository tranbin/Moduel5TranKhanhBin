import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {ReactiveStudentComponent} from "./reactive-student/reactive-student.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";


const routes: Routes = [{
  path :"", component :StudentListComponent},
  {path:"create",component :ReactiveStudentComponent},
  {path:"detail/:id",component : StudentDetailComponent},
  {path:"edit/:id",component : EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
