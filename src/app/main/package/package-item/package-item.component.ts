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
  itensDescriptions: string;
  modal: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.itensDescriptions = '';
    const itensDivide = [];
    this.package.package_items.forEach(element => {
      let found = false;
      itensDivide.forEach(arrElement => {
        if (arrElement.type === element.type) {
          found = true;
          arrElement.quantity += 1;
        }
      });
      if (!found) {
        itensDivide.push({
          type: element.type,
          quantity: 1
        });
      }
    });
    itensDivide.forEach(el => {
      this.itensDescriptions += `${el.quantity}x ${el.type}, `;
    });
    this.itensDescriptions = this.itensDescriptions.substring(0, this.itensDescriptions.length - 2);
  }
}



