import { OPTIONS } from './../../constants/option';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.scss'],
})
export class NavPageComponent implements OnInit {
  options = OPTIONS;

  constructor() {}

  ngOnInit(): void {}
}
