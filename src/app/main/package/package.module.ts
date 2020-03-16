import { PackageRoutingModule } from './package-routing.module';
import { PackageComponent } from './package.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageItemComponent } from './package-item/package-item.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PackageCreateComponent } from './package-create/package-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackageItemDescriptionComponent } from './package-item/package-item-description/package-item-description.component';
import { PackageItemCreateComponent } from './package-create/package-item-create/package-item-create.component';


@NgModule({
  declarations: [PackageComponent, PackageItemComponent,
    PackageCreateComponent, PackageItemDescriptionComponent,
    PackageItemCreateComponent],
  imports: [
    CommonModule,
    PackageRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  entryComponents: [
    PackageCreateComponent,
    PackageItemDescriptionComponent,
    PackageItemCreateComponent
  ]
})
export class PackageModule { }
