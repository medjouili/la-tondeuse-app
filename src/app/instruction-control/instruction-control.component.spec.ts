import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionControlComponent } from './instruction-control.component';

describe('InstructionControlComponent', () => {
  let component: InstructionControlComponent;
  let fixture: ComponentFixture<InstructionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
