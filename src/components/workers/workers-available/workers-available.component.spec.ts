import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersAvailableComponent } from './workers-available.component';

describe('WorkersAvailableComponent', () => {
  let component: WorkersAvailableComponent;
  let fixture: ComponentFixture<WorkersAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkersAvailableComponent]
    });
    fixture = TestBed.createComponent(WorkersAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
