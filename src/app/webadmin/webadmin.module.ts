import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { WebadminRoutingModule } from './webadmin-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { EditpersonComponent } from './editperson/editperson.component';
import { ViewpersonComponent } from './viewperson/viewperson.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, AddpersonComponent, EditpersonComponent, ViewpersonComponent],
  imports: [
    CommonModule,
    WebadminRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WebadminModule { }
