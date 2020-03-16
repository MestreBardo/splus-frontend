import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-package-item-create',
  templateUrl: './package-item-create.component.html',
  styleUrls: ['./package-item-create.component.scss']
})
export class PackageItemCreateComponent implements OnInit {

  public evento = new EventEmitter();
  constructor(public modalItem: BsModalRef ) { }

  ngOnInit() {
  }
  fechar() {
    this.evento.emit(true);
    this.modalItem.hide();
  }

}
