import Link from "next/link";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-muted p-4">
        <nav className="space-y-2">
          <Link href="/portal" className="block p-2 hover:bg-accent">
            Dashboard
          </Link>
          <Link href="/portal/schedule" className="block p-2 hover:bg-accent">
            Schedule
          </Link>
          <Link href="/portal/mentors" className="block p-2 hover:bg-accent">
            Mentors
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
