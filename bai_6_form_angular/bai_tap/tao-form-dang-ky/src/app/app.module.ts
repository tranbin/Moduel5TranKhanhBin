import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterListComponent } from './register-list/register-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    RegisterListComponent,


  ],
    imports: [
        BrowserModule,
        FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
