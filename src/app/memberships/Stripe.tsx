import Script from "next/script";
export default function Stripe() {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js"></Script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1OJmUqJ1kSEluvIzLYyAqLOG"
        publishable-key="pk_live_51OJll2J1kSEluvIzvRDs6akU2WNo5RQ2xUNd5MQ92CAyA4J7CpOTdFm15g4jqoKPm9ip9hc9CR3KTXv0CBEVFa1I00VKExIAPZ"
      >
      </stripe-pricing-table>
    </>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}