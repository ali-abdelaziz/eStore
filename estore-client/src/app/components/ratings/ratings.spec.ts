import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ratings } from './ratings';

describe('Ratings', () => {
  let component: Ratings;
  let fixture: ComponentFixture<Ratings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ratings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ratings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
