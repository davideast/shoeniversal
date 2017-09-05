import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeGridComponent } from './shoe-grid.component';

describe('ShoeGridComponent', () => {
  let component: ShoeGridComponent;
  let fixture: ComponentFixture<ShoeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
