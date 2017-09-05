import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeItemComponent } from './shoe-item.component';

describe('ShoeItemComponent', () => {
  let component: ShoeItemComponent;
  let fixture: ComponentFixture<ShoeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
