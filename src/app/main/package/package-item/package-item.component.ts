import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent implements OnInit {
  @Input() package: any;
  date: Date;
  itemsShortDescription: string;
  constructor() { }

  ngOnInit() {
    console.log(this.package);
    this.itemsShortDescription = '';
    this.setShortDescription();
  }

  setShortDescription() {
    if (this.package.package_items.length === 1) {
      this.itemsShortDescription = this.package.package_items[0].description;
    } else if (this.package.package_items.length === 2) {
      this.itemsShortDescription = `${this.package.package_items[0].description} and ${this.package.package_items[0].description}`;
    } else if (this.package.package_items.length > 2) {
      for (let i = 0; i < 2; i++) {
        this.itemsShortDescription += ` ${this.package.package_items[i].description}, `;
      }
      this.itemsShortDescription = `${this.itemsShortDescription.slice(1, -1)} and ${this.package.package_items.length - 2} more item(s)`;
    }
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
