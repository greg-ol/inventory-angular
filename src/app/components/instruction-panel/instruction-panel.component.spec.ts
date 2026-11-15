import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructionPanel } from './instruction-panel.component';

describe('InstructionPanel', () => {
  let component: InstructionPanel;
  let fixture: ComponentFixture<InstructionPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(InstructionPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
