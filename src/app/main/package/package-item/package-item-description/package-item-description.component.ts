import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-item-description',
  templateUrl: './package-item-description.component.html',
  styleUrls: ['./package-item-description.component.scss']
})
export class PackageItemDescriptionComponent implements OnInit {

  package: any;
  constructor(public modal: BsModalRef) { }

  ngOnInit() {

  }

}
