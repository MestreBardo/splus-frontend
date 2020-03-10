import { PackageItemDescriptionComponent } from './package-item-description/package-item-description.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent implements OnInit {
  @Input() package: any;
  date: Date;
  modal: BsModalRef;
  itemsShortDescription: string;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    console.log(this.package);
  }

  showAllInfo() {
    this.modal = this.modalService.show(PackageItemDescriptionComponent,
      {
        initialState: {package: this.package}
      });

    this.modalService.onHidden.pipe(take(1)).subscribe(() => {
    });
  }

  getDate() {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const javaScriptDate = new Date(this.package.received_date);
    const dateNow = new Date();
    const utcRegister = Date.UTC(javaScriptDate.getFullYear(), javaScriptDate.getMonth(), javaScriptDate.getDay());
    const utcNow = Date.UTC(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDay());
    return Math.floor((utcNow - utcRegister) / _MS_PER_DAY);
  }
}
