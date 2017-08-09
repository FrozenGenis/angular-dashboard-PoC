import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTasksComponent } from './contract-tasks.component';

describe('ContractTasksComponent', () => {
  let component: ContractTasksComponent;
  let fixture: ComponentFixture<ContractTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
