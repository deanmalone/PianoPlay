/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PianoService } from './piano.service';

describe('PianoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoService]
    });
  });

  it('should ...', inject([PianoService], (service: PianoService) => {
    expect(service).toBeTruthy();
  }));
});
