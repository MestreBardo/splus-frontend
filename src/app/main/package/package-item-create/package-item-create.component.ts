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
  title: string;
  receivedFrom: string;
  items: any[];
  constructor(public modal: BsModalRef, private packageService: PackageService) {

  }

  ngOnInit() {
    this.title = '';
    this.description = '';
    this.items = [];
  }
  savePackage() {
    this.packageService.postPackage({
      id: 2,
      title: this.title,
      description: this.description,
      packageFrom: this.receivedFrom,
      itens: this.items
    })
    .then(() => {
      this.modal.hide();
    });

  }
  addNewItem() {
    this.items.push({
      description: '',
      quantity: 1
    });
  }

}
