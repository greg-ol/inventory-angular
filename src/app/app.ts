import { Component, inject, signal, ViewChild } from '@angular/core';
import { InventoryService } from './service/inventory.service';
import { InstructionPanel } from './components/instruction-panel/instruction-panel.component';
import { InventoryForm } from './components/inventory-form/inventory-form.component';
import { InventoryTable } from './components/inventory-table/inventory-table.component';
import { UpdateRequest, UpdateResponse } from './models/inventory.models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  imports: [ InstructionPanel, InventoryForm, InventoryTable],
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true
})
export class App {
  
  private readonly inventory = inject(InventoryService);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly updateResult = signal<UpdateResponse | null>(null);

  update(request: UpdateRequest): void {
    this.loading.set(true);
    this.error.set('');
    this.inventory.updateInvewntory(request).subscribe({
      next: res => {
        this.updateResult.set(res);
        this.loading.set(false);
      },
      error:(e : HttpErrorResponse) => {
        this.error.set(e.error?.error ?? `Request failed (${e.status}). Check API`);
        this.loading.set(false);
      }
    })
  }
}
