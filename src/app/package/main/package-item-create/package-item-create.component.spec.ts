import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageItemCreateComponent } from './package-item-create.component';

describe('PackageItemCreateComponent', () => {
  let component: PackageItemCreateComponent;
  let fixture: ComponentFixture<PackageItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
