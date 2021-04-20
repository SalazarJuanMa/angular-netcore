import { TestBed } from '@angular/core/testing';
import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getValidationErrorMessage', () => {
    const req = 'required';
    const value = 'Required';
    expect(ValidationService.getValidatorErrorMessage(req, 'FirstName')).toBe(value);
  });
});
