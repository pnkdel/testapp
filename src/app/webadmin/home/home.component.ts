import { Component, OnInit } from '@angular/core';
import { PersoninfoService } from '../../api/personinfo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  individuals:any;
  token:any;
  individualRecord:any;

  constructor(private personinfoService : PersoninfoService, private router: Router) {
    this.token = localStorage.getItem('jwt');
   
   }

  ngOnInit(): void {
    console.log('LOCAL STORAGE ' + localStorage.getItem('jwt'));
    this.getAllRecords();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  getAllRecords() {
    this.personinfoService.getall().subscribe(response => {
      this.individuals = response.records;
      console.log(response.records);
    },
      error => {
        console.log("Response Failed");
     })
  }


  editindividual( id:any) {
 
    this.personinfoService.getIndividualData(id, this.token).subscribe(response => {
      console.log(response);
      if(response.status == 'failure') {
        this.router.navigate(['/login']);
      } else {
        localStorage.setItem('jwt', response.token);
        this.individualRecord = response.record ;
        this.personinfoService.setPersonalData(this.individualRecord);
        this.router.navigate(['/edit']);
      }
   
    },
      error => {
        console.log("Response Failed");
     })
  }

  viewindividual( id:any) {
 
    this.personinfoService.getIndividualData(id, this.token).subscribe(response => {
      console.log(response);
      if(response.status == 'failure') {
        this.router.navigate(['/login']);
      } else {
        localStorage.setItem('jwt', response.token);
        this.individualRecord = response.record ;
        this.personinfoService.setPersonalData(this.individualRecord);
        this.router.navigate(['/viewdata']);
      }
   
    },
      error => {
        console.log("Response Failed");
     })
  }


  deleteindividual( id:any) {
    this.personinfoService.deleteIndividualData(id, this.token).subscribe(response => {
      console.log(response);
      if(response.status == 'failure') {
        this.router.navigate(['/login']);
      } else {
        localStorage.setItem('jwt', response.token);
        this.getAllRecords();
        this.router.navigate(['/home']);
      }
   
    },
      error => {
        console.log("Response Failed");
     })
  }

}
