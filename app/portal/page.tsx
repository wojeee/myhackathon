import Link from "next/link";

export default function PortalDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to MYHackathon Portal</h1>
      <p className="text-xl mb-4">
        Access the event programme, connect with mentors, and submit your
        proposal here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <DashboardCard title="Programme" link="/portal/programme" />
        <DashboardCard title="Mentors" link="/portal/mentors" />
        <DashboardCard title="Submit Proposal" link="/portal/submit-proposal" />
      </div>
    </div>
  );
}

function DashboardCard({ title, link }: { title: string; link: string }) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <Link href={link} className="text-primary hover:underline">
        View Details
      </Link>
    </div>
  );
}
