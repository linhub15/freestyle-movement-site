import { render } from "preact";
import GoogleCalendar from "../../widgets/google_calendar.tsx";

function buildWidget() {
  const scripts = document.querySelectorAll(".google-calendar");
  scripts.forEach((script) => {
    const calendarId = script?.getAttribute("data-calendar-id");
    if (!calendarId) {
      throw new Error("Calendar ID not found. Did you add the script tag?");
    }

    // Create container div
    const containerId = `calendar-${calendarId}`;
    const container = document.createElement("div");
    container.setAttribute("id", containerId);

    // Mount to DOM
    const parent = script?.parentElement;
    if (!parent) {
      throw new Error("script tag needs to be within a parent element");
    }

    parent.prepend(container);
    const mountedContainer = document.getElementById(containerId);
    if (!mountedContainer) {
      throw new Error("failed to mount container to DOM");
    }

    render(<GoogleCalendar calendarId={calendarId} />, mountedContainer);
  });
}

buildWidget();
