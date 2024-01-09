import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersGlobalComponent } from './workers-global.component';

describe('WorkersGlobalComponent', () => {
  let component: WorkersGlobalComponent;
  let fixture: ComponentFixture<WorkersGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkersGlobalComponent]
    });
    fixture = TestBed.createComponent(WorkersGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
