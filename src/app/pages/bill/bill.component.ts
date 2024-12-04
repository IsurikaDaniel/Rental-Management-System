import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bill',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {
  items: { name: string; price: number; quantity: number; total: number }[] = [];
  totalAmount: number = 0;

  addItem(itemName: string, itemPrice: string, itemQuantity: string): void {
    const price = parseFloat(itemPrice);
    const quantity = parseInt(itemQuantity, 10);

    if (itemName && price > 0 && quantity > 0) {
      const itemTotal = price * quantity;
      this.items.push({
        name: itemName,
        price: price,
        quantity: quantity,
        total: itemTotal
      });
      this.calculateTotalAmount();
    }
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.items.reduce((sum, item) => sum + item.total, 0);
  }

  clearItems(): void {
    this.items = [];
    this.totalAmount = 0;
  }
}
