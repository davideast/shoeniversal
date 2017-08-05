import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontListComponent } from './storefront-list.component';

describe('StorefrontListComponent', () => {
  let component: StoreFrontListComponent;
  let fixture: ComponentFixture<StoreFrontListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFrontListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFrontListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
