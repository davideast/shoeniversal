import { TestBed, async, inject } from '@angular/core/testing';

import { ShoeResolveGuard } from './shoe-resolve.guard';

describe('ShoeResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoeResolveGuard]
    });
  });

  it('should ...', inject([ShoeResolveGuard], (guard: ShoeResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
