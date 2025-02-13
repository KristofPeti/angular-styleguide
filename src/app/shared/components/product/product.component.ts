/*
 * SPDX-FileCopyrightText: (c) 2022 Carl Zeiss AG
 * SPDX-License-Identifier: MIT
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productImageClicked: EventEmitter<void> = new EventEmitter<void>();

  imageClicked() {
    this.productImageClicked.emit();
  }
}
