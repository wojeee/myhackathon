import { getMentors } from "@/lib/wordpress";

export default async function MentorsPage() {
  const mentors = await getMentors();

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-primary-800">
        Hackathon Mentors
      </h1>
      {mentors && mentors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor: any) => (
            <div
              key={mentor.id}
              className="bg-secondary-50 shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-2 text-secondary-700">
                {mentor.title?.rendered || "Unnamed Mentor"}
              </h2>
              <p className="text-secondary-600 mb-4">
                {mentor.acf?.expertise || "Expertise not specified"}
              </p>
              {mentor.excerpt?.rendered ? (
                <div
                  className="text-secondary-800"
                  dangerouslySetInnerHTML={{ __html: mentor.excerpt.rendered }}
                />
              ) : (
                <p className="text-secondary-800">No description available.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-secondary-600">No mentors found.</p>
      )}
    </div>
  );
}
