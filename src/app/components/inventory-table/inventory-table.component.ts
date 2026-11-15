import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdateResponse } from '../../models/inventory.models';

@Component({
  imports: [],
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
})
export class InventoryTable {

  @Input({required: true}) updateResult!: UpdateResponse;
}
