import { PackageService } from './../../../../services/package.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-package-item-create',
  templateUrl: './package-item-create.component.html',
  styleUrls: ['./package-item-create.component.scss']
})
export class PackageItemCreateComponent implements OnInit {
  modalName = 'itemCreate';
  name: string;
  quantity: number;
  itens = [];
  itensCheck: boolean[] = [];
  constructor(public modalItem: BsModalRef, private packageService: PackageService ) { }

  setParameters() {
    if (this.quantity !== this.itens.length) {
      if (this.quantity < this.itens.length) {
        for (let i = this.itens.length; i > this.quantity; i--) {
          this.itens.pop();
          this.itensCheck.pop();
        }
      } else {
        for (let i = this.itens.length; i < this.quantity; i++) {
          this.itens.push({
            serialNumber: '',
            toDo: ''
          });
          this.itensCheck.push(null);
        }
      }
    }
  }

  IncludeItem() {
    this.packageService.addItem.emit({
      name: this.name,
      itens: this.itens
    });
    this.modalItem.hide();
  }

  checkComplete(i: number) {
    if (this.itens[i].serialNumber === '' || this.itens[i].toDo === '') {
      this.itensCheck[i] = false;
    } else {
      this.itensCheck[i] = true;
    }
  }

  ngOnInit() {
    this.quantity = 0;
  }

}
