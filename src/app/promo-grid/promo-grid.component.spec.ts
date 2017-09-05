import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoGridComponent } from './promo-grid.component';

describe('PromoGridComponent', () => {
  let component: PromoGridComponent;
  let fixture: ComponentFixture<PromoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
