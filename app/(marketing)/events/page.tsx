import { getEvents } from "@/lib/wordpress";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hackathon Events</h1>
      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: any) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">
                {event.title.rendered}
              </h2>
              <p className="text-gray-600 mb-4">{event.acf.event_date}</p>
              <div
                dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
}
