type Flag = string | 'N' | 'Y';

export interface Item {
  productCode?: string;
  productUPC?: string;
  productSKU: string;
  productName?: string;
  productDescription: string;
  saleCode: 'S';
  unitPrice: number;
  quantity: number;
  totalAmount: string;
  taxAmount?: string;
  taxIncludedFlag: Flag;
  discountFlag: Flag;
}
