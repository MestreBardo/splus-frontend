import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  classMenu: string;
  constructor() { }

  ngOnInit() {
    this.classMenu = 'closed';
  }

  showMenu() {
    this.classMenu = 'open';
  }

}
