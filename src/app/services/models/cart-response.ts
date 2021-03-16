export interface BmFinanceDetail {
  financeImg: string;
  financePromoMsg: string;
  financePromoUrl: string;
}

export interface ItemAmount {
  itemPrice: number;
  itemTotalPrice: number;
}

export interface Store {
  state: string;
  stockLabel: string;
  storeDistance: string;
  storeId: string;
  storeName: string;
}

export interface CartItem {
  itemId: string;
  itemQuantity: string;
  bmFinanceDetail: BmFinanceDetail;
  brandName: string;
  itemName: string;
  bundleSku: boolean;
  shipInventoryAvailable: boolean;
  electronicShipping: boolean;
  freeShipping: boolean;
  imageUrl: string;
  ispuAvailable: boolean;
  itemAmount: ItemAmount;
  modelCode: string;
  modelNumber: string;
  pdpUrl: string;
  productId: string;
  productType: string;
  shippingMethod: string;
  shippingType: string;
  variantId: string;
  storeId: string;
  warrantyItem: boolean;
  stores: Store[];
  seePriceAtCheckout: boolean;
  isGetItem: boolean;
  isSubstituteItem: boolean;
}

export interface CartSummary {
  subtotal: number;
  shippingAmount: number;
  taxAmount: number;
  cartTotal: number;
  taxDisclaimer: string;
}

export interface CartDetails {
  cartItems: CartItem[];
  cartSummary: CartSummary;
}

export interface CartResponse {
  status: number;
  statusMessage: string;
  cartId: string;
  zipCode: string;
  showCheckoutButton: boolean;
  cartDetails: CartDetails;
}
