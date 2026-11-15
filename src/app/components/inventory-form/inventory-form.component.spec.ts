import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryForm } from './inventory-form.component';
import { UpdateRequest } from '../../models/inventory.models';


describe('InventoryForm', () => {
  let component: InventoryForm;
  let fixture: ComponentFixture<InventoryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('rejects invalid days', () => {
    component.form.patchValue({days: 0});
    expect(component.form.controls.days.valid).toBeFalsy();
    component.form.patchValue({days: 366});
    expect(component.form.controls.days.valid).toBeFalsy();
  });

});
