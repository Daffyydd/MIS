import { Component, OnInit } from '@angular/core';
import {DateTime} from 'luxon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public appVersion ='1.0.0.0';
  public currentYear: string = '2021'//DateTime.now().toFormat('y');

  constructor() {}

  ngOnInit() {}
}
