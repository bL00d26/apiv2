import { capitalizeFirstLetter } from '../helpers/utils';

export enum InvoiceStatusEnum {
  DRAFT = 'DRAFT', // The starting status for all invoices. You can still edit the invoice at this point. -- You can finalize the invoice to open, or delete it if it’s a one-off
  OPEN = 'OPEN', // The invoice has been finalized, and is awaiting customer payment. You can no longer edit the invoice. -- Send the invoice. You can also mark the invoice as paid, void or uncollectible
  PAID = 'PAID', // This invoice was paid. -- No actions possible
  VOID = 'VOID', // This invoice was a mistake, and must be canceled. -- No actions possible.
  UNCOLLECTIBLE = 'UNCOLLECTIBLE', //The customer is unlikely to pay this invoice (treat it as bad debt in your accounting process). -- You can void or pay the invoice.
  OVERDUE = 'OVERDUE', //The invoice have exceeded it's due date and the customer haven't paid it.
}

export const InvoiceHistoryEvents = {
  EMAIL_SENT: (status: string) =>
    `${capitalizeFirstLetter(status.toLocaleLowerCase())}InvoiceEmailSent`, // The starting status for all invoices. You can still edit the invoice at this point. -- You can finalize the invoice to open, or delete it if it’s a one-off
  NOTE_ADDED: 'NoteAdded',
  OVERDUE: 'InvoiceMarkedAsOverdue',
  PAID: 'InvoicePaid',
  FINALIZED: 'InvoiceFinalized',
  VOIDED: 'InvoiceVoided',
  UPDATED: 'InvoiceUpdated',
  UNCOLLECTIBLE: 'InvoiceMarkedAsUncollectible',
};
