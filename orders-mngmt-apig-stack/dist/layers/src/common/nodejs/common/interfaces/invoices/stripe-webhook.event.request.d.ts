export interface Event {
    id: string;
    created: number;
    type: string;
}
export interface StripeWebhookEventRequest {
    id: string;
    idempotency_key: string;
    event: Event;
}
