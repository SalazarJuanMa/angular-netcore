import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });

  it('should hide loader', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    service.hideLoader();
    service.loaderState.subscribe((res) => {
      expect(res).toBeDefined();
    });
  });
});
