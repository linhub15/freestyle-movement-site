import Script from "next/script";

type Props = {
  pricingTableId: string;
  publishableKey: string;
};

export function Stripe(props: Props) {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" />
      <stripe-pricing-table
        pricing-table-id={props.pricingTableId}
        publishable-key={props.publishableKey}
      />
    </>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
