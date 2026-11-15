import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Item, UpdateRequest } from '../../models/inventory.models';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { parseInventoryText } from '../../utils/text-parser';

export function convertJson(itemsJson: string): string | null {
  try {
    return JSON.parse(itemsJson);
  } catch (error) {
    return null;
  }
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
})
export class InventoryForm {

  @Input() loading = false;
  @Input() error = '';
  @Output() update = new EventEmitter<UpdateRequest>();

  convertError = '';

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    itemsJson: ['', [Validators.required]],
    date: [new Date().toISOString().slice(0,10), Validators.required],
    days: [1, [Validators.required, Validators.min(1), Validators.max(365)]]
  });

  submit(): void {
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const {itemsJson, date, days} = this.form.getRawValue();
    let convItems = convertJson(itemsJson);

    if(!convItems) {
     convItems =  this.convertText();
     this.update.emit({items: JSON.parse(convItems), date, days: Number(days)});
    } else {
      this.update.emit({items: JSON.parse(itemsJson), date, days: Number(days)});
    }
  }

  convertText()  {
    const text = this.form.controls.itemsJson.value;
    this.convertError = '';

    const {items, errors} = parseInventoryText(text);
    if(errors.length) {
      this.convertError = errors.join('\n');
      return "[]";
    }

    if(!items.length) {
      this.convertError = 'There is no list to convert';
      return "[]";
    }

    return JSON.stringify(items);
  }

}
