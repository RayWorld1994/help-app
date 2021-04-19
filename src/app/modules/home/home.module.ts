import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { NavItemComponent } from './components/nav-page/nav-item/nav-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeLayoutComponent, NavPageComponent, NavItemComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
