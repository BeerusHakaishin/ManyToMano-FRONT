import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspiration2Component } from './inspiration2.component';

describe('Inspiration2Component', () => {
  let component: Inspiration2Component;
  let fixture: ComponentFixture<Inspiration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inspiration2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inspiration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
