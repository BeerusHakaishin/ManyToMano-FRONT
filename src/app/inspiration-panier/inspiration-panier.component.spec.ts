import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationPanierComponent } from './inspiration-panier.component';

describe('InspirationPanierComponent', () => {
  let component: InspirationPanierComponent;
  let fixture: ComponentFixture<InspirationPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
