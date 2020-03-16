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
  title: string;
  receivedFrom: string;
  items: any[];
  constructor(public modal: BsModalRef, private packageService: PackageService, private modalService: BsModalService) {

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
    // this.modalService.onHidden.pipe(take(1)).subscribe((data) => {
    //   if (this.modalService.getModalsCount() === 1) {
    //     console.log('teste2');
    //   }
    // })

    this.modalItem = this.modalService.show(PackageItemCreateComponent);

    this.modalItem.content.evento.pipe(take(1))
      .subscribe(() => console.log('teste99'));
  }

}
