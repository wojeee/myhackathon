import { getEvents } from "@/lib/wordpress";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-primary-800">
        Hackathon Events
      </h1>
      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: any) => (
            <div
              key={event.id}
              className="bg-primary-50 shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-2 text-primary-700">
                {event.title?.rendered || "Untitled Event"}
              </h2>
              <p className="text-primary-600 mb-4">
                {event.acf?.event_date || "Date not specified"}
              </p>
              {event.excerpt?.rendered ? (
                <div
                  className="text-primary-800"
                  dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
                />
              ) : (
                <p className="text-primary-800">No description available.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-primary-600">No events found.</p>
      )}
    </div>
  );
}
