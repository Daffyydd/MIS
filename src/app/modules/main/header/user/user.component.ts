import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public user: any;
  constructor(private authenticationService:  AuthenticationService,private router:Router) {}

  ngOnInit() {
    this.user = this.authenticationService.getUserProfile(); 
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  formatDate(date: string) {
   // return DateTime.fromISO(date).toFormat('dd LLL yyyy');
   return date.toString();
  }
}
