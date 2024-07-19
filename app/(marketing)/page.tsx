import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-primary-800">
        Welcome to MYHackathon
      </h1>
      <p className="text-xl mb-8 text-primary-600">Innovate, Create, Elevate</p>
      <div className="flex flex-col space-y-4">
        <Link
          href="/events"
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded text-center"
        >
          View Events
        </Link>
        <Link
          href="/mentors"
          className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-2 px-4 rounded text-center"
        >
          Meet Our Mentors
        </Link>
        <Link
          href="/faq"
          className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-4 rounded text-center"
        >
          FAQ
        </Link>
        <Link
          href="/portal"
          className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded text-center"
        >
          Enter Portal
        </Link>
      </div>
    </main>
  );
}
