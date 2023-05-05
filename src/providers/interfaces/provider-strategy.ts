export interface ProviderStrategy {
  //ver que comparten para crear la interfaz de los dtos que entrarán en cada método
  createOrder(order: any): Promise<any>;
  modifyBefore(order: any): Promise<any>;
  modifyAfter(order: any): Promise<any>;
  placeOrder(order: any): Promise<any>;
  deleteOrder(order: any): Promise<any>;
  getOrder(order: any): Promise<any>;
  //etc based on controller
}
