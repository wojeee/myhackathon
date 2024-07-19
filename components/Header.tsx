import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MYHackathon
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/events" className="hover:text-primary-200">
              Events
            </Link>
          </li>
          <li>
            <Link href="/mentors" className="hover:text-primary-200">
              Mentors
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-primary-200">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/portal" className="hover:text-primary-200">
              Portal
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
