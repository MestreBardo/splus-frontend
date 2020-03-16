import { take } from 'rxjs/operators';
import { PackageItemCreateComponent } from './package-item-create/package-item-create.component';
import { PackageService } from '../../../services/package.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.scss']
})
export class PackageCreateComponent implements OnInit {
  modalName = 'packageCreate';
  modalItem: BsModalRef;
  description: string;
  receivedFrom: string;
  items: any[];
  constructor(public modal: BsModalRef, private packageService: PackageService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.description = '';
    this.items = [];
    this.packageService.addItem.subscribe((items: any) => {

      this.items.push(items);

      console.log(this.items);
    });
  }
  savePackage() {
    this.packageService.postPackage({
      id: 2,
      description: this.description,
      packageFrom: this.receivedFrom,
      itens: this.items
    })
    .then(() => {
      this.modal.hide();
    });

  }
  addNewItem() {
    this.modalItem = this.modalService.show(PackageItemCreateComponent);
    this.modalService.onHidden.pipe(take(1)).subscribe((data) => {
      if (this.modalService.getModalsCount() === 1 && this.modalItem.content.modalName === 'itemCreate' ) {
        console.log('teste2');
      }
    });
  }

}
