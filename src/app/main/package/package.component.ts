import { PackageCreateComponent } from './package-create/package-create.component';
import { PackageService } from './../../services/package.service';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  isOpenModalPackage: boolean;
  modal: BsModalRef;
  modalRef: BsModalRef;
  packages: any;
  constructor(private packageService: PackageService, private modalService: BsModalService) { }
  ngOnInit() {
    this.isOpenModalPackage = false;
    this.packageService.getAllProducts()
    .then(data => this.packages = data);
  }
  openModal() {
    this.isOpenModalPackage = true;
    this.modalService.onHidden.pipe(take(2)).subscribe((modal) => {
      if (this.modalService.getModalsCount() === 0 && this.isOpenModalPackage === true) {
        this.packageService.getAllProducts()
        .then(data => {
          this.packages = data;
        });
      }
    });

    this.modal = this.modalService.show(PackageCreateComponent);

  }

}
