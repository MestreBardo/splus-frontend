import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageItemDescriptionComponent } from './package-item-description.component';

describe('PackageItemDescriptionComponent', () => {
  let component: PackageItemDescriptionComponent;
  let fixture: ComponentFixture<PackageItemDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageItemDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
