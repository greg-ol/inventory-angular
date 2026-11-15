import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryTable } from './inventory-table.component';
import { UpdateResponse } from '../../models/inventory.models';

const RESPONSE: UpdateResponse = {
  inventoryDate: '2026-11-12',
  items: [{name: 'Normal Item', sellIn: 2, quality: 0},
    {name: 'Sulfuras', sellIn: 0, quality: 80}
  ]
};

describe('InventoryTable', () => {
  let component: InventoryTable;
  let fixture: ComponentFixture<InventoryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryTable],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryTable);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('updateResult', RESPONSE);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render row per item', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('tbody tr').length).toBe(2);
  });
});
