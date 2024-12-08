import { cn } from "@/lib/utils/cn";
import { CreditCardIcon } from "@heroicons/react/24/outline";

type Props = {
  /** stripe payment link */
  href: string;
  amount: string;
  action?: string;
};

export function StripePayButton(props: Props) {
  return (
    <a
      className={cn(
        "flex items-center justify-center gap-1 rounded-lg border border-sky-500 px-4 py-3 text-center font-medium text-sky-500",
        "transition ease-in-out hover:border-sky-400 hover:text-sky-400",
      )}
      href={props.href}
    >
      <CreditCardIcon className="mr-1 size-6" />
      <span className="font-normal">{props.action ?? "Pay"}</span>
      <span className="">{props.amount}</span>
    </a>
  );
}
