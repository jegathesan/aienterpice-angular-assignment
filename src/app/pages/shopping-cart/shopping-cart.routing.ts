import { ShoppingCartComponent } from './shopping-cart.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
  },
];

export const ShoppingCartRoutes = RouterModule.forChild(routes);
