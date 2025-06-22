import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catnavigation } from './catnavigation';

describe('Catnavigation', () => {
  let component: Catnavigation;
  let fixture: ComponentFixture<Catnavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catnavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catnavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
