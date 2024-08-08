type Props = {
  amount: string;
};

export function ETransferInfo(props: Props) {
  return (
    <div className="rounded-lg border border-zinc-700 py-2 text-center text-zinc-300">
      <div className="text-sm">
        e-Transfer <span>{props.amount}</span>
      </div>
      <div>pay@freestylemovement.ca</div>
    </div>
  );
}
