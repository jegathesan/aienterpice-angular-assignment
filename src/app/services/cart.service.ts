import { RestEnds } from './../shared/config';
import { environment } from './../../environments/environment';
import { APIHelper } from './../shared/helpers/';
import { Injectable } from '@angular/core';
import { MockData } from './mock-reference';

const V3APIBASE = environment.V3ApiBase;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private apiHelper: APIHelper) {}

  public deliveryOptions = [
    {
      title: 'Pickup from Store',
      value: 'Store',
    },
    {
      title: 'Deliver Online',
      value: 'shipping',
    },
    {
      title: 'Deliver Email',
      value: 'EMAIL',
    },
  ];

  getCartItems() {
    return this.apiHelper.sendGetRequest(
      V3APIBASE,
      RestEnds.CART_LIST,
      false,
      MockData.CART_ITEMS
    );
  }
}
