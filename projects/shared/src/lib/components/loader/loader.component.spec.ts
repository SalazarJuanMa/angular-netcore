import { async, ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { of } from 'rxjs/internal/observable/of';
import { LoaderService } from '../../../../../tools/src/lib/services/loader.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  const mockLoaderService = new LoaderService();

  beforeEach(async(() => {
    // mockLoaderService = jasmine.createSpyObj(['']);
    TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      providers: [
        { provide: LoaderService, useValue: mockLoaderService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check loader after timeout if state show is false', fakeAsync(() => {
    mockLoaderService.loaderState = of({ show: false });
    component.ngOnInit();
    tick(500);
    expect(component.show).toBe(false);
    flush();
  }));

  it('should check loader after timeout if state show is true', () => {
    mockLoaderService.loaderState = of({ show: true });
    component.ngOnInit();
    expect(component.show).toBe(true);
  });
});
