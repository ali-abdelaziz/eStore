import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGallery } from './products-gallery';

describe('ProductsGallery', () => {
  let component: ProductsGallery;
  let fixture: ComponentFixture<ProductsGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
