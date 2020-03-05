import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';



@NgModule({
  declarations: [MainComponent, MenuComponent, MenuMobileComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
