import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to MYHackathon</h1>
      <p className="text-xl mb-8">Innovate, Create, Elevate</p>
      <div className="flex space-x-4">
        <Link
          href="/events"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Events
        </Link>
        <Link
          href="/portal"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Enter Portal
        </Link>
      </div>
    </main>
  );
}
