import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { EditpersonComponent } from './editperson/editperson.component';
import { ViewpersonComponent } from './viewperson/viewperson.component';
const routes: Routes = [
  {path : '', component : HomeComponent },
  {path : 'add', component : AddpersonComponent },
  {path : 'edit', component : EditpersonComponent },
  {path : 'viewdata', component : ViewpersonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebadminRoutingModule { }
