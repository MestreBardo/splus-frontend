import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent implements OnInit {
  @Input() package: any;

  itemsShortDescription: string;
  constructor() { }

  ngOnInit() {
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
}
