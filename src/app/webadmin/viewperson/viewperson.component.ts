import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../counties';
import { PersoninfoService } from '../../api/personinfo.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewperson',
  templateUrl: './viewperson.component.html',
  styleUrls: ['./viewperson.component.css']
})
export class ViewpersonComponent implements OnInit {

  personalData: any;
  individualName: any;
  designation:any;
  email:any;
  gender:any;
  personalStatus:any;
  addressline1:any;
  addressline2:any;
  city:any;
  country:any;
  person_id:any;

  allcountries = COUNTRIES;

  constructor(private personinfoService : PersoninfoService, private router: Router) { 
    this.personalData = this.personinfoService.getPersonalData();
    this.individualName = this.personalData[0].individual_name;
    this.designation = this.personalData[0].designation;
    this.email = this.personalData[0].email;
    this.addressline1 = this.personalData[0].address_line1;
    this.addressline2 = this.personalData[0].address_line2;
    this.city = this.personalData[0].city;
    this.country = this.personalData[0].country_code;
    this.personalStatus = this.personalData[0].person_status ;
    this.gender = this.personalData[0].gender;
    this.person_id = this.personalData[0].person_id;
   // console.log('Individual Data ' +  this.personcountry );
  }

  ngOnInit(): void {
  }

}
