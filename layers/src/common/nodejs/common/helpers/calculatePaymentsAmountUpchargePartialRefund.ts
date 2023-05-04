import {
  IOrderPaymentRequest,
  PaymentsEntity,
} from '../interfaces/OrderPaymentRequest.interface';

/**
 * @function calculatePaymentsAmountUpchargePartialRefund
 * @description Calculate the amount if it is an overcharge or a partial return.
 * @param {IOrderPaymentRequest} lastPayment 
 * @param {number} DiffAmount 
 * @returns { data: IOrderPaymentRequest; total: number }
 */
export function calculatePaymentsAmountUpchargePartialRefund(
  lastPayment: IOrderPaymentRequest,
  DiffAmount: number,
): { data: IOrderPaymentRequest; total: number } {
  const { TaxAmount, TotalAmount, Payments } = lastPayment;
  const primaryPayment =
    Payments &&
    Payments.length > 0 &&
    Payments.find((payment) => payment.IsPrimary);
  const {
    Amount: { Value },
  } = primaryPayment;
  const newTotalAmount: number =
    Number(DiffAmount) > 0
      ? Number(Number(TotalAmount) + Math.abs(DiffAmount))
      : Number(Number(TotalAmount) - Math.abs(DiffAmount));
  const newTotalAmountFormatted = +newTotalAmount.toFixed(2);
  const newTotalAmountWithTaxes = newTotalAmount + Number(TaxAmount);
  const newTotalAmountWithTaxesFormatted: number =
    +newTotalAmountWithTaxes.toFixed(2);
  const newPrimaryPayment: PaymentsEntity = {
    ...primaryPayment,
    Amount: {
      Currency: primaryPayment.Amount.Currency,
      Value: newTotalAmountWithTaxesFormatted,
    },
  };
  const newPaymentsArray =
    Payments &&
    Payments.length > 0 &&
    Payments.filter((payment) => !payment.IsPrimary).concat([
      {
        ...newPrimaryPayment,
      },
    ]);
  return {
    data: {
      ...lastPayment,
      TotalAmount: newTotalAmountFormatted,
      Payments: newPaymentsArray,
    },
    total: newTotalAmountWithTaxesFormatted,
  };
}
