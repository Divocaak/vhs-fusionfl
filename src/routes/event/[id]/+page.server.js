export const load = async ({ url, params, fetch }) => {
    const events = await fetch("/events.json");
    const eventData = await events.json();

    const id = params.id;
    return {
        id: id,
        event: eventData[id]
    };
}