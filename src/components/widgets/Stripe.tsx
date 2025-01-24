import Script from "next/script";

type Props = {
  pricingTableId: string;
  publishableKey: string;
};

export function Stripe(props: Props) {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" />
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted stripe
        dangerouslySetInnerHTML={{
          __html: `<stripe-pricing-table
        pricing-table-id=${props.pricingTableId}
        publishable-key=${props.publishableKey}
      />`,
        }}
      />
    </>
  );
}
