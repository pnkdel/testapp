import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../api/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:any;
  uPassword:any;
 
  constructor( private authenticateService : AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }

  verifyLogin() {
    
    this.authenticateService.verifyUserCredentials(this.userName, this.uPassword).subscribe(response => {
      console.log(response.token);
      localStorage.setItem('jwt', response.token);
      this.router.navigate(['/home']);
    },
      error => {
        console.log("Response Failed");
     })

  }

}
