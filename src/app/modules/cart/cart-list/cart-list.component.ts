import { CartItem } from './../../../services/models/cart-response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  @Input('cartItems') cartItems: CartItem[] = [];
  constructor() {}

  ngOnInit() {}
}
