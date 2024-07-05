import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

export function LumaCalendar() {
	return (
		<div>
			<div className="flex justify-between">
				<h2 className="py-4 text-lg text-zinc-300 leading-5 sm:truncate sm:text-xl sm:tracking-tight">
					Event Calendar
				</h2>
				<a className="flex items-center gap-1 text-sm text-zinc-300 hover:underline" href="https://lu.ma/freestyle.movement">
					See all events<ArrowTopRightOnSquareIcon className="size-3" />
				</a>
			</div>

			<iframe
				className="rounded-lg"
				title="Luma Calendar"
				frameBorder={0}
				src="https://lu.ma/embed/calendar/cal-GCyVXmDYI2qfDuH/events?lt=dark"
				width="100%"
				height="500px"
				allowFullScreen={false}
				aria-hidden="false"
			/>
		</div>
	);
}
