import { PackageService } from './../../../services/package.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-package-item-create',
  templateUrl: './package-item-create.component.html',
  styleUrls: ['./package-item-create.component.scss']
})
export class PackageItemCreateComponent implements OnInit {
  description: string;
  received_from: string;
  item1: string;
  item2: string;
  item3: string;
  items: any[];
  constructor(public modal: BsModalRef, private packageService: PackageService) {

  }

  ngOnInit() {
    this.description = '';
    this.items = [];
  }
  savePackage() {
    this.packageService.postPackage({
      id: 1,
      packageDesc: this.description,
      packageFrom: this.received_from,
      itens: this.items
    })
    .then(() => {
      this.modal.hide();
    });

  }
  addNewItem() {
    console.log(this.items);
    this.items.push({
      description: '',
      quantity: 1
    });
  }

}
