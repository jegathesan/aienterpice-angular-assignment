import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/share.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartListComponent,
    CartSummaryComponent,
  ],
  exports: [CartComponent],
})
export class CartModule {}
