import Link from "next/link";
import DemoBanner from "@/components/DemoBanner";

// Sample applications for the demo.
// Later these will come from Supabase.
const applications = [
    {
        id: 1,
        eventId: "ingenuity-2026",
        eventTitle: "Ingenuity 2026",
        role: "Registration Support",
        campus: "Adelaide City",
        eventDate: "11 November 2026",
        submittedDate: "13 September 2026",
        status: "Pending",
    },
    {
        id: 2,
        eventId: "wellbeing-expo",
        eventTitle: "Student Wellbeing Expo",
        role: "Welcome Volunteer",
        campus: "Mawson Lakes",
        eventDate: "18 November 2026",
        submittedDate: "10 September 2026",
        status: "Approved",
    },
    {
        id: 3,
        eventId: "peer-mentor",
        eventTitle: "Peer Mentor Welcome Day",
        role: "Orientation Support",
        campus: "Magill",
        eventDate: "25 November 2026",
        submittedDate: "5 September 2026",
        status: "Rejected",
    },
];

// Give each status a clear colour.
function getStatusStyle(status: string) {
    if (status === "Approved") {
        return "bg-green-100 text-green-800";
    }

    if (status === "Rejected") {
        return "bg-red-100 text-red-800";
    }

    return "bg-amber-100 text-amber-800";
}

export default function MyApplicationsPage() {
    return (
        <main className="min-h-screen bg-white text-[#171717]">
            <DemoBanner />

            {/* Small top menu */}
            <div className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex max-w-7xl justify-end gap-6 px-6 py-3 text-sm">
                    <a href="#" className="hover:underline">
                        Current students
                    </a>

                    <a href="#" className="hover:underline">
                        Contact
                    </a>

                    <button className="font-semibold hover:underline">
                        Sign in
                    </button>
                </div>
            </div>

            {/* Main header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                    <div>
                        <p className="text-2xl font-bold tracking-tight">
                            Adelaide University
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Volunteer & Event Coordination
                        </p>
                    </div>

                    <nav className="hidden items-center gap-8 font-medium lg:flex">
                        <Link href="/" className="hover:text-purple-700">
                            Discover
                        </Link>

                        <Link
                            href="/my-applications"
                            className="font-semibold text-purple-700"
                        >
                            My Applications
                        </Link>

                        <a href="#" className="hover:text-purple-700">
                            My Shifts
                        </a>

                        <a href="#" className="hover:text-purple-700">
                            Profile
                        </a>
                    </nav>
                </div>
            </header>

            {/* Page heading */}
            <section className="bg-[#f3f1ed]">
                <div className="mx-auto max-w-7xl px-6 py-14">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                        Student / Volunteer Portal
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                        My Applications
                    </h1>

                    <p className="mt-5 max-w-2xl leading-7 text-gray-600">
                        View the volunteer opportunities you have applied for and track
                        the progress of each application.
                    </p>
                </div>
            </section>

            {/* Applications */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="flex flex-wrap items-end justify-between gap-5">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            Application history
                        </h2>

                        <p className="mt-2 text-gray-600">
                            {applications.length} applications
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="bg-black px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
                    >
                        Find more opportunities
                    </Link>
                </div>

                <div className="mt-10 space-y-6">
                    {applications.map((application) => (
                        <article
                            key={application.id}
                            className="border border-gray-200 bg-white p-7 transition hover:shadow-md"
                        >
                            <div className="flex flex-col justify-between gap-7 lg:flex-row">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span
                                            className={`px-3 py-1 text-sm font-semibold ${getStatusStyle(
                                                application.status
                                            )}`}
                                        >
                                            {application.status}
                                        </span>

                                        <span className="text-sm text-gray-500">
                                            Submitted {application.submittedDate}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-2xl font-semibold">
                                        {application.eventTitle}
                                    </h3>

                                    <div className="mt-5 grid gap-5 text-sm sm:grid-cols-3">
                                        <div>
                                            <p className="font-semibold uppercase tracking-wide text-gray-500">
                                                Volunteer role
                                            </p>

                                            <p className="mt-2 text-base">
                                                {application.role}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-semibold uppercase tracking-wide text-gray-500">
                                                Campus
                                            </p>

                                            <p className="mt-2 text-base">
                                                {application.campus}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-semibold uppercase tracking-wide text-gray-500">
                                                Event date
                                            </p>

                                            <p className="mt-2 text-base">
                                                {application.eventDate}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Status explanation */}
                                    <div className="mt-6 border-t border-gray-200 pt-5">
                                        {application.status === "Pending" && (
                                            <p className="text-sm leading-6 text-gray-600">
                                                Your application has been submitted and is waiting for
                                                review by an event coordinator.
                                            </p>
                                        )}

                                        {application.status === "Approved" && (
                                            <p className="text-sm leading-6 text-gray-600">
                                                Your application has been approved. Your assigned
                                                activity will appear in My Shifts.
                                            </p>
                                        )}

                                        {application.status === "Rejected" && (
                                            <p className="text-sm leading-6 text-gray-600">
                                                This application was not approved. You can explore
                                                other available volunteer opportunities.
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-start">
                                    {application.eventId !== "peer-mentor" ? (
                                        <Link
                                            href={`/events/${application.eventId}`}
                                            className="font-semibold text-purple-700 hover:underline"
                                        >
                                            View event →
                                        </Link>
                                    ) : (
                                        <span className="text-sm text-gray-400">
                                            Event details unavailable
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Status guide */}
            <section className="bg-[#f3f1ed]">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <h2 className="text-2xl font-semibold">
                        Application status guide
                    </h2>

                    <div className="mt-7 grid gap-5 md:grid-cols-3">
                        <div className="bg-white p-6">
                            <span className="bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                                Pending
                            </span>

                            <p className="mt-4 leading-6 text-gray-600">
                                The application has been received and is waiting for review.
                            </p>
                        </div>

                        <div className="bg-white p-6">
                            <span className="bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                                Approved
                            </span>

                            <p className="mt-4 leading-6 text-gray-600">
                                The application has been accepted and a volunteer role can be
                                assigned.
                            </p>
                        </div>

                        <div className="bg-white p-6">
                            <span className="bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
                                Rejected
                            </span>

                            <p className="mt-4 leading-6 text-gray-600">
                                The application was not approved for this opportunity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo note */}
            <section className="bg-[#ece7ff]">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <p className="font-semibold text-purple-900">
                        Demo application data
                    </p>

                    <p className="mt-2 max-w-3xl leading-7 text-gray-700">
                        Application records and statuses shown on this page are sample data.
                        In the completed system they will be stored securely and retrieved
                        from the project database.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <p className="text-lg font-semibold">
                        Adelaide University
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                        Volunteer & Event Coordination Demo
                    </p>

                    <p className="mt-5 text-sm text-gray-400">
                        Educational prototype only. Not an official Adelaide University
                        production service.
                    </p>
                </div>
            </footer>
        </main>
    );
}