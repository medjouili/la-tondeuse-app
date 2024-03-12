import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnDisplayComponent } from './lawn-display.component';

describe('LawnDisplayComponent', () => {
  let component: LawnDisplayComponent;
  let fixture: ComponentFixture<LawnDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawnDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawnDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
