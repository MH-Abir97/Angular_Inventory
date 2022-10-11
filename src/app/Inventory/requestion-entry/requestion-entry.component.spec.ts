import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestionEntryComponent } from './requestion-entry.component';

describe('RequestionEntryComponent', () => {
  let component: RequestionEntryComponent;
  let fixture: ComponentFixture<RequestionEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestionEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
