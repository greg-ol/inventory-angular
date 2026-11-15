import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryForm } from './inventory-form.component';


describe.only('InventoryForm', () => {
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

});
