import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionnaryPageComponent} from "./dictionnary-page/dictionnary-page.component";
import {DictionarydetailComponent} from "./dictionarydetail/dictionarydetail.component";


const routes: Routes = [
  {path: "", component: DictionnaryPageComponent},
  {path: "detail/:id", component: DictionarydetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
