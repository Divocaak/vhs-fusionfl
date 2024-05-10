export const load = async ({ url, params, fetch }) => {
    const events = await fetch("/events.json");
    const eventsData = await events.json();

    return { events: eventsData };
}