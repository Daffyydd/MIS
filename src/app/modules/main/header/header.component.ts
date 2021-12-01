import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: FormGroup;
  constructor(private appService: AppService) {
    this.searchForm = new FormGroup({
      search: new FormControl(null),
    });
  }

  ngOnInit() {}

  logout() {
    this.appService.logout();
  }
}
