export interface Tax {
  lineId: string;
  amount: number;
  description: string;
  isIncluded: boolean;
}

export interface Total {
  lineId: string;
  type: string;
  value: number;
}

export interface Quantity {
  value: number;
}

export interface ProductId {
  type: string;
  value: string;
}

export interface OrderLine {
  quantity?: Quantity;
  lineId: string;
  comments: string;
  description: string;
  productId: ProductId;
  substitutionAllowed: boolean;
  unitPrice: number;
  overridePrice: boolean;
  parentLineId?: string;
  linkGroupCode?: string;
}

export interface AdditionalReferenceIds {
  AtoOrderId: string;
  AlohaCheckId: string;
  AtoReferenceId: string;
  Reorder: boolean;
  IsCatering: boolean;
}

export interface Fee {
  lineId: string;
  type: string;
  amount: number;
}

export interface Lock {
  lockedBy: string;
  lockedDate: Date;
}

export interface Fulfillment {
  address: any;
  leadTimes: any[];
  pickupDate: Date;
  pickupLocation: string;
  type: string;
  autoRelease: boolean;
  catering: boolean;
}

export interface Customer {
  id: string;
  externalIds: any[];
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface OrderLineGroup {
  lineId: string;
  orderLineIds: string[];
}

export interface Adjustment {
  level: string;
  type: string;
}

export interface Promotion {
  lineId?: string;
  referenceId?: string;
  amount?: number;
  status?: string;
  type?: string;
  subType?: string;
  payBalance?: boolean;
  numGuests?: number;
  gratuity?: number;
  orderLineGroups?: OrderLineGroup[];
  adjustment?: Adjustment;
  supportingData?: string;
}

export interface OrderInfo {
  xTrinitipAppInstallationId: string;
  xTrinitipApiKey: string;
  orderSchema: string;
  channel: string;
  currency: string;
  source: string;
  status: string;
  groupMembers: any[];
  taxes: Tax[];
  totals: Total[];
  orderLines: OrderLine[];
  fulfillment: Fulfillment;
  customer: Customer;
  payments: PaymentInfo[];
  promotions: Promotion[];
  additionalReferenceIds: AdditionalReferenceIds;
  id: string;
  enterpriseUnitId: string;
  expireAt: Date;
  fees: Fee[];
  taxExempt: boolean;
  totalModifiers: any[];
  partySize: number;
  dateCreated: Date;
  dateUpdated: Date;
  lock: Lock;
  sourceOrganization: string;
  etag: Date;
}

export interface LoyaltyInfo {
  customerType: string;
}

export interface BuyerInfo {
  name: string;
  email: string;
  phoneNumber: string;
  loyaltyInfo: LoyaltyInfo;
}

export interface AdditionalReferences {
  correlationId: string;
  transactionTag: string;
}

export interface TransactionInfo {
  amount: number;
  currency: string;
  transactionId: string;
  additionalReferences: AdditionalReferences;
}

export interface CardInfo {
  cardholderName: string;
  maskedNumber: string;
  type: string;
}

export interface Payment {
  _id: string;
  provider: string;
  transactionInfo: TransactionInfo;
  createdAt: Date;
  state: string;
  cardInfo: CardInfo;
}

export interface PaymentInfo {
  amount: number;
  gratuity: number;
  status: string;
  type: string;
  subType: string;
  payBalance: boolean;
  lineId: string;
}

export interface Order {
  isFavorite: boolean;
  _id: string;
  organization: string;
  space: string;
  environment: string;
  orderInfo: OrderInfo;
  activityLog: any[];
  state: string;
  payments: Payment[];
  createdAt: Date;
  updatedAt: Date;
  buyerInfo: BuyerInfo;
  utcOffset: string;
}

// Sorted Order
export interface SubItem {
  lineId: string;
  parentLineId: string;
  comments: string;
  description: string;
  productId: ProductId;
  substitutionAllowed: boolean;
  unitPrice: number;
  linkGroupCode: string;
  overridePrice: boolean;
  extendedAmount?: number;
  notes?: any[];
  priceModifiers?: any[];
  quantity?: Quantity;
  taxes?: Tax[];
  fulfillmentResult?: string;
}

export interface OrderLinesSorted {
  quantity: Quantity;
  lineId: string;
  comments: string;
  description: string;
  productId: ProductId;
  substitutionAllowed: boolean;
  unitPrice: number;
  overridePrice: boolean;
  subItems: SubItem[];
  extendedAmount?: number;
  notes?: any[];
  priceModifiers?: any[];
  taxes?: any[];
  fulfillmentResult?: string;
}
