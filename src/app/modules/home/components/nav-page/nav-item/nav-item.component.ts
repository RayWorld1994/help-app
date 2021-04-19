import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../../../interfaces/option.interface';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() option!: Option;
  constructor() {}

  ngOnInit(): void {}
}
