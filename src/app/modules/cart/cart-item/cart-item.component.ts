import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services';
import { CartItem } from 'src/app/services/models/cart-response';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input('cartItem') cartItem: CartItem;

  shippingType = '';

  get deliveryOptions() {
    return this.cartService.deliveryOptions;
  }

  get stores() {
    return this.cartItem ? this.cartItem.stores : [];
  }

  get isStoreShipping() {
    return this.cartItem ? this.cartItem.shippingType == 'Store' : false;
  }

  get isProductHaveFinancePromo() {
    return (
      this.cartItem &&
      this.cartItem.bmFinanceDetail &&
      this.cartItem.bmFinanceDetail.financePromoMsg
    );
  }
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingType = this.cartItem.shippingType;
  }

  ngAfterViewInit(): void {}
}
