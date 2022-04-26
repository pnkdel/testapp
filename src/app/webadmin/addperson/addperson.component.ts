import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../counties';
import { PersoninfoService } from '../../api/personinfo.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {

  individualName:any;
  designation:any;
  email:any;
  gender:any;
  personalStatus:any;
  addressline1:any;
  addressline2:any;
  city:any;
  country:any;

  
 
  allcountries = COUNTRIES;

  constructor( private personinfoService : PersoninfoService, private router: Router) { 
    console.log('Add Person');
  }

  ngOnInit(): void {
  }

  


  saveperson() {

    
    
    let postData = 
      {
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


  
   
    this.personinfoService.addperson(postData).subscribe(response => {
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
