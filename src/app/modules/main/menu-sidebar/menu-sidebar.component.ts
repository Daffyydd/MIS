import { Component, OnInit } from '@angular/core';
import { users } from '../../../helpers/data/users';
import { User } from '../../../models/user';
import { AuthenticationService } from '../../../services/authentication.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {
  public user: any;
  public menu = Menu;
  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.getUserProfile();
  
  }

}