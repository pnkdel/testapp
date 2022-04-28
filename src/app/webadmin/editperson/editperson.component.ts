import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../counties';
import { PersoninfoService } from '../../api/personinfo.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.css']
})
export class EditpersonComponent implements OnInit {
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
 allcountries: any;

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
    this.allcountries = COUNTRIES;
  }
  


  updateperson() {

    let postData = 
      {
        person_id :  this.person_id,
        individual_name :  this.individualName,
        designation : this.designation,
        email : this.email,
        gender : this.gender,
        person_status : this.personalStatus,
        address_line1 : this.addressline1,
        address_line2 : this.addressline2,
        city : this.city,
        country_code : this.country,
        apiKey :  environment.apiKey,
        appID :  environment.appId,
        jwt : localStorage.getItem('jwt') 
    };

    this.personinfoService.updateperson(postData).subscribe(response => {
      if(response.status == 'failure') {
        this.router.navigate(['/login']);
      } else {
        localStorage.setItem('jwt', response.token);
       this.router.navigate(['/home']);
      }
      console.log(response);
    
    },
      error => {
        console.log("Response Failed");
      })

  }

}
