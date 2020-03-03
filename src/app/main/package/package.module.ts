import { PackageRoutingModule } from './package-routing.module';
import { PackageComponent } from './package.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageItemComponent } from './package-item/package-item.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PackageItemCreateComponent } from './package-item-create/package-item-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PackageComponent, PackageItemComponent, PackageItemCreateComponent],
  imports: [
    CommonModule,
    PackageRoutingModule,
    ModalModule.forRoot(),
    FormsModule

  ],
  entryComponents: [
    PackageItemCreateComponent
  ]
})
export class PackageModule { }
