import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionarydetailComponent } from './dictionarydetail/dictionarydetail.component';
import { DictionnaryPageComponent } from './dictionnary-page/dictionnary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionarydetailComponent,
    DictionnaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
