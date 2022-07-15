import { TestBed } from '@angular/core/testing';

import { StoryService } from './service/story.service';

describe('StoryService', () => {
  let service: StoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
