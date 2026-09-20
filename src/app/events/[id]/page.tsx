import Link from "next/link";
import { notFound } from "next/navigation";

import ApplicationForm from "@/components/ApplicationForm";
import DemoBanner from "@/components/DemoBanner";
import { events } from "@/data/events";

type ApplyPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ApplyPage({
    params,
}: ApplyPageProps) {
    const { id } = await params;

    // Find the event from the URL.
    const event = events.find((item) => item.id === id);

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-[#171717]">
            <DemoBanner />

            {/* Top menu */}
            <div className="border-b border-gray-200">
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
            <header className="border-b border-gray-200">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                    <div>
                        <p className="text-2xl font-bold">
                            Adelaide University
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Volunteer & Event Coordination
                        </p>
                    </div>

                    <nav className="hidden gap-8 font-medium lg:flex">
                        <Link href="/" className="hover:text-purple-700">
                            Discover
                        </Link>

                        <a href="#" className="hover:text-purple-700">
                            My Applications
                        </a>

                        <a href="#" className="hover:text-purple-700">
                            My Shifts
                        </a>

                        <a href="#" className="hover:text-purple-700">
                            Profile
                        </a>
                    </nav>
                </div>
            </header>

            {/* Back link */}
            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <Link
                        href={`/events/${event.id}`}
                        className="text-sm font-semibold text-purple-700 hover:underline"
                    >
                        ← Back to event details
                    </Link>
                </div>
            </div>

            {/* Application page */}
            <section className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

                    {/* Form */}
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-purple-700">
                            Volunteer application
                        </p>

                        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                            Apply for {event.title}
                        </h1>

                        <p className="mt-5 leading-7 text-gray-600">
                            Choose the volunteer role you are interested in and provide your
                            availability.
                        </p>

                        <div className="mt-10">
                            <ApplicationForm
                                eventTitle={event.title}
                                roles={event.roles}
                            />
                        </div>
                    </div>

                    {/* Event summary */}
                    <aside>
                        <div className="border border-gray-200 bg-[#f7f7f7] p-7">
                            <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
                                Event summary
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                {event.title}
                            </h2>

                            <div className="mt-6 space-y-5 text-sm">
                                <div>
                                    <p className="font-semibold text-gray-500">
                                        Date
                                    </p>

                                    <p className="mt-1 text-base">
                                        {event.date}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-500">
                                        Time
                                    </p>

                                    <p className="mt-1 text-base">
                                        {event.startTime} – {event.endTime}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-500">
                                        Campus
                                    </p>

                                    <p className="mt-1 text-base">
                                        {event.campus}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-500">
                                        Location
                                    </p>

                                    <p className="mt-1 text-base leading-6">
                                        {event.location}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-500">
                                        Availability
                                    </p>

                                    <p className="mt-1 text-base">
                                        {event.placesAvailable} of {event.capacity} places remaining
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-16 bg-black text-white">
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