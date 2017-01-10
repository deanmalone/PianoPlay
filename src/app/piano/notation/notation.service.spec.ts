/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotationService } from './notation.service';

describe('NotationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotationService]
    });
  });

  it('should ...', inject([NotationService], (service: NotationService) => {
    expect(service).toBeTruthy();
  }));
});
