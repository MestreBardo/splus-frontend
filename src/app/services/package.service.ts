import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  addItem = new EventEmitter();
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://limitless-scrubland-52724.herokuapp.com/package')
      .subscribe((data: any) => {
        resolve(data);
      });
    });

  }
  postPackage(newPackage: any) {
    return new Promise((resolve, reject) => {
      this.http.post('https://limitless-scrubland-52724.herokuapp.com/package', newPackage).subscribe((data: any) => {
        resolve(data);
      });
    });
  }
  addAItemToPackage(newItem: any) {
    this.addItem.emit(newItem);
  }
}
