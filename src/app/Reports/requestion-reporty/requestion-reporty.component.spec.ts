import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestionReportyComponent } from './requestion-reporty.component';

describe('RequestionReportyComponent', () => {
  let component: RequestionReportyComponent;
  let fixture: ComponentFixture<RequestionReportyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestionReportyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestionReportyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
