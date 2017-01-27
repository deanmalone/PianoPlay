/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PianoQuizService } from './piano-quiz.service';

describe('PianoQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoQuizService]
    });
  });

  it('should ...', inject([PianoQuizService], (service: PianoQuizService) => {
    expect(service).toBeTruthy();
  }));
});
