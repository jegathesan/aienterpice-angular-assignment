import { ShoppingCartRoutes } from './shopping-cart.routing';
import { SharedModule } from './../../shared/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CartModule } from 'src/app/modules/cart/cart.module';

@NgModule({
  imports: [CommonModule, SharedModule, ShoppingCartRoutes, CartModule],
  declarations: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
