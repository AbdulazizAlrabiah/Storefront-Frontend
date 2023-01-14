import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlaceDialogComponent } from './productplacedialog.component';

describe('ProductplacedialogComponent', () => {
  let component: ProductPlaceDialogComponent;
  let fixture: ComponentFixture<ProductPlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPlaceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
