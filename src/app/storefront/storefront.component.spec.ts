import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontComponent } from './storefront.component';

describe('StoreFrontComponent', () => {
  let component: StoreFrontComponent;
  let fixture: ComponentFixture<StoreFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
