import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should return the correct ID from the URL', () => {
    const id = 123;
    const url = 'https://example.com/123';
    const expectedId = UtilsService.getIdFromUrl(url);
    expect(id).toEqual(expectedId);
  });
});
