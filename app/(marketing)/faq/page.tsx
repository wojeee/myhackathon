import { getFAQs } from "@/lib/wordpress";

export default async function FAQPage() {
  const faqs = await getFAQs();

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-primary-800">
        Frequently Asked Questions
      </h1>
      {faqs && faqs.length > 0 ? (
        <div className="space-y-6">
          {faqs.map((faq: any) => (
            <div key={faq.id} className="bg-accent-50 shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2 text-accent-700">
                {faq.title?.rendered || "Untitled Question"}
              </h2>
              {faq.content?.rendered ? (
                <div
                  className="text-accent-800"
                  dangerouslySetInnerHTML={{ __html: faq.content.rendered }}
                />
              ) : (
                <p className="text-accent-800">No answer available.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-accent-600">No FAQs found.</p>
      )}
    </div>
  );
}
