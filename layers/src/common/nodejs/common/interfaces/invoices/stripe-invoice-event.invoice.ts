import { InvoiceProviderEnum, InvoiceStatusEnum } from '../../enum';

export interface StripeEventInvoice {
  invoiceInfo: StripeInvoiceInfo;
  status: InvoiceStatusEnum;
}
export interface StripeInvoiceInfo {
  id: string;
  object: string;
  account_country: string;
  account_name: string;
  account_tax_ids?: null;
  amount_due: number;
  amount_paid: number;
  amount_remaining: number;
  application?: null;
  application_fee?: null;
  attempt_count: number;
  attempted: boolean;
  auto_advance: boolean;
  automatic_tax: AutomaticTax;
  billing: string;
  billing_reason: string;
  charge: string;
  closed: boolean;
  collection_method: string;
  created: number;
  currency: string;
  custom_fields?: null;
  customer: string;
  customer_address?: null;
  customer_email?: null;
  customer_name?: null;
  customer_phone?: null;
  customer_shipping?: null;
  customer_tax_exempt: string;
  customer_tax_ids?: null[] | null;
  date: number;
  default_payment_method?: null;
  default_source?: null;
  default_tax_rates?: null[] | null;
  description: string;
  discount?: null;
  discounts?: null[] | null;
  due_date?: null;
  ending_balance: number;
  finalized_at: number;
  footer?: null;
  forgiven: boolean;
  hosted_invoice_url: string;
  invoice_pdf: string;
  last_finalization_error?: null;
  lines: Lines;
  livemode: boolean;
  metadata: Metadata;
  next_payment_attempt?: null;
  number: string;
  on_behalf_of?: null;
  paid: boolean;
  paid_out_of_band: boolean;
  payment_intent: string;
  payment_settings: PaymentSettings;
  period_end: number;
  period_start: number;
  post_payment_credit_notes_amount: number;
  pre_payment_credit_notes_amount: number;
  quote?: null;
  receipt_number?: null;
  rendering_options?: null;
  starting_balance: number;
  statement_descriptor?: null;
  status: string;
  status_transitions: StatusTransitions;
  subscription?: null;
  subtotal: number;
  subtotal_excluding_tax: number;
  tax?: null;
  tax_percent?: null;
  test_clock?: null;
  total: number;
  total_discount_amounts?: null[] | null;
  total_excluding_tax: number;
  total_tax_amounts?: null[] | null;
  transfer_data?: null;
  webhooks_delivered_at: number;
  invoiceSchema?: InvoiceProviderEnum;
}
export interface AutomaticTax {
  enabled: boolean;
  status?: null;
}
export interface Lines {
  object: string;
  data?: DataEntity[] | null;
  has_more: boolean;
  total_count: number;
  url: string;
}
export interface DataEntity {
  id: string;
  object: string;
  amount: number;
  amount_excluding_tax: number;
  currency: string;
  description: string;
  discount_amounts?: null[] | null;
  discountable: boolean;
  discounts?: null[] | null;
  invoice_item: string;
  livemode: boolean;
  metadata: Metadata1;
  period: Period;
  plan?: null;
  price: Price;
  proration: boolean;
  proration_details: ProrationDetails;
  quantity: number;
  subscription?: null;
  tax_amounts?: null[] | null;
  tax_rates?: null[] | null;
  type: string;
  unique_id: string;
  unit_amount_excluding_tax: string;
}
export interface Metadata1 {
  [key: string]: string;
}
export interface Period {
  end: number;
  start: number;
}
export interface Price {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount?: null;
  livemode: boolean;
  lookup_key?: null;
  metadata: Metadata1;
  nickname?: null;
  product: string;
  recurring?: null;
  tax_behavior: string;
  tiers_mode?: null;
  transform_quantity?: null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}
export interface ProrationDetails {
  credited_items?: null;
}
export interface Metadata {
  OrderID: string;
}
export interface PaymentSettings {
  default_mandate?: null;
  payment_method_options?: null;
  payment_method_types?: null;
}
export interface StatusTransitions {
  finalized_at: number;
  marked_uncollectible_at?: null;
  paid_at: number;
  voided_at?: null;
}
