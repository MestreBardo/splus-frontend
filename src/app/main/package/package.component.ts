import { PackageItemCreateComponent } from './package-item-create/package-item-create.component';
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
  modal: BsModalRef;
  modalRef: BsModalRef;
  packages: any;
  constructor(private packageService: PackageService, private modalService: BsModalService) { }
  ngOnInit() {
    this.packageService.getAllProducts()
    .then(data => this.packages = data);
  }
  openModal() {
    this.modal = this.modalService.show(PackageItemCreateComponent);

    this.modalService.onHidden.pipe(take(1)).subscribe(() => {
      this.packageService.getAllProducts()
      .then(data => this.packages = data);
    });
  }
  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
    this.modalService.onHidden.pipe(take(1)).subscribe(() => {
      console.log('teste2');
    });
  }

}
