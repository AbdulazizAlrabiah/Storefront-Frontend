import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInCartComponent } from './productincart.component';

describe('ProductincartComponent', () => {
  let component: ProductInCartComponent;
  let fixture: ComponentFixture<ProductInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
