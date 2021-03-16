import {
  CartResponse,
  CartDetails,
  CartItem,
  CartSummary,
} from './../../services/models/cart-response';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  isLoadingCartDetail = false;
  cartResponse: CartResponse;
  cartItems: CartItem[] = [];
  cartSummary: CartSummary;

  get totalCartItems() {
    return this.cartItems.reduce((previousValue, currentItem, index) => {
      return previousValue + parseInt(currentItem.itemQuantity);
    }, 0);
  }
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCartDetail();
  }

  loadCartDetail() {
    this.isLoadingCartDetail = true;
    this.cartService.getCartItems().subscribe(
      (response) => {
        this.isLoadingCartDetail = false;
        this.cartResponse = <CartResponse>response;
        if (this.cartResponse.status == 200) {
          this.cartItems = this.cartResponse.cartDetails.cartItems;
          this.cartSummary = this.cartResponse.cartDetails.cartSummary;
        }
      },
      (error) => {
        this.isLoadingCartDetail = false;
      }
    );
  }
}
