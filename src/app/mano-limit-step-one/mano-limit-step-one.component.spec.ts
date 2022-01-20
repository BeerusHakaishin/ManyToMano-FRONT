import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManoLimitStepOneComponent } from './mano-limit-step-one.component';

describe('ManoLimitStepOneComponent', () => {
  let component: ManoLimitStepOneComponent;
  let fixture: ComponentFixture<ManoLimitStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManoLimitStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManoLimitStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
