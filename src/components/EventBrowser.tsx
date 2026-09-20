"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// Events used for the frontend demo.
const demoEvents = [
    {
        id: "ingenuity-2026",
        title: "Ingenuity 2026",
        date: "11 November 2026",
        campus: "Adelaide City",
        category: "STEM",
        description:
            "Support visitors and event teams during a university innovation and STEM showcase.",
        places: 12,
        status: "Open",
        colour: "bg-purple-700",
    },
    {
        id: "wellbeing-expo",
        title: "Student Wellbeing Expo",
        date: "18 November 2026",
        campus: "Mawson Lakes",
        category: "Wellbeing",
        description:
            "Help students find wellbeing services and support event activities throughout the day.",
        places: 8,
        status: "Open",
        colour: "bg-[#18a999]",
    },
    {
        id: "peer-mentor",
        title: "Peer Mentor Welcome Day",
        date: "25 November 2026",
        campus: "Magill",
        category: "Mentoring",
        description:
            "Help welcome new students and support peer connection and orientation activities.",
        places: 0,
        status: "Coming soon",
        colour: "bg-[#ee626b]",
    },
];

export default function EventBrowser() {
    const [search, setSearch] = useState("");
    const [campus, setCampus] = useState("");
    const [category, setCategory] = useState("");

    // Show only events matching the selected filters.
    const filteredEvents = useMemo(() => {
        return demoEvents.filter((event) => {
            const matchesSearch =
                event.title.toLowerCase().includes(search.toLowerCase()) ||
                event.description.toLowerCase().includes(search.toLowerCase());

            const matchesCampus =
                campus === "" || event.campus === campus;

            const matchesCategory =
                category === "" || event.category === category;

            return matchesSearch && matchesCampus && matchesCategory;
        });
    }, [search, campus, category]);

    // Clear all filters.
    const clearFilters = () => {
        setSearch("");
        setCampus("");
        setCategory("");
    };

    return (
        <>
            {/* Search and filters */}
            <section className="bg-[#171717] text-white">
                <div className="mx-auto max-w-7xl px-6 py-14">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-300">
                        Explore opportunities
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                        Find your volunteering opportunity
                    </h2>

                    <p className="mt-3 max-w-2xl text-gray-300">
                        Search opportunities by keyword, campus or category.
                    </p>

                    <div className="mt-8 grid gap-3 lg:grid-cols-4">

                        {/* Search */}
                        <div>
                            <label htmlFor="event-search" className="sr-only">
                                Search events
                            </label>

                            <input
                                id="event-search"
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search events..."
                                className="w-full bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        {/* Campus filter */}
                        <div>
                            <label htmlFor="campus" className="sr-only">
                                Campus
                            </label>

                            <select
                                id="campus"
                                value={campus}
                                onChange={(event) => setCampus(event.target.value)}
                                className="w-full bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-purple-400"
                            >
                                <option value="">All campuses</option>
                                <option value="Adelaide City">
                                    Adelaide City
                                </option>
                                <option value="Magill">
                                    Magill
                                </option>
                                <option value="Mawson Lakes">
                                    Mawson Lakes
                                </option>
                                <option value="Waite">
                                    Waite
                                </option>
                                <option value="Roseworthy">
                                    Roseworthy
                                </option>
                                <option value="Mount Gambier">
                                    Mount Gambier
                                </option>
                                <option value="Whyalla">
                                    Whyalla
                                </option>
                            </select>
                        </div>

                        {/* Category filter */}
                        <div>
                            <label htmlFor="category" className="sr-only">
                                Category
                            </label>

                            <select
                                id="category"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                                className="w-full bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-purple-400"
                            >
                                <option value="">All categories</option>
                                <option value="STEM">STEM</option>
                                <option value="Wellbeing">Wellbeing</option>
                                <option value="Mentoring">Mentoring</option>
                            </select>
                        </div>

                        {/* Reset */}
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="bg-purple-700 px-6 py-4 font-semibold text-white transition hover:bg-purple-600"
                        >
                            Clear filters
                        </button>
                    </div>
                </div>
            </section>

            {/* Event results */}
            <section
                id="opportunities"
                className="mx-auto max-w-7xl scroll-mt-10 px-6 py-20"
            >
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                            What&apos;s happening
                        </p>

                        <h2 className="mt-3 text-4xl font-semibold">
                            Volunteer opportunities
                        </h2>

                        <p className="mt-3 text-gray-600">
                            {filteredEvents.length}{" "}
                            {filteredEvents.length === 1
                                ? "opportunity found"
                                : "opportunities found"}
                        </p>
                    </div>

                    {(search || campus || category) && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="font-semibold underline"
                        >
                            View all events
                        </button>
                    )}
                </div>

                {/* No matching events */}
                {filteredEvents.length === 0 && (
                    <div className="mt-10 border border-gray-200 bg-gray-50 p-10 text-center">
                        <h3 className="text-2xl font-semibold">
                            No opportunities found
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Try another campus, category or search term.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-6 bg-black px-6 py-3 font-semibold text-white hover:bg-purple-700"
                        >
                            Show all opportunities
                        </button>
                    </div>
                )}

                {/* Event cards */}
                {filteredEvents.length > 0 && (
                    <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {filteredEvents.map((event) => (
                            <article
                                key={event.id}
                                className="flex flex-col border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className={`h-3 ${event.colour}`} />

                                <div className="flex flex-1 flex-col p-7">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm font-semibold text-purple-700">
                                            {event.date}
                                        </span>

                                        {event.status === "Open" ? (
                                            <span className="bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                                                Open
                                            </span>
                                        ) : (
                                            <span className="bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                                                Coming soon
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="mt-4 text-2xl font-semibold">
                                        {event.title}
                                    </h3>

                                    <p className="mt-3 text-gray-600">
                                        {event.campus}
                                    </p>

                                    <p className="mt-5 flex-1 leading-7 text-gray-700">
                                        {event.description}
                                    </p>

                                    <div className="mt-6 border-t border-gray-200 pt-5">
                                        {event.status === "Open" ? (
                                            <>
                                                <p className="text-sm text-gray-500">
                                                    {event.places} volunteer places available
                                                </p>

                                                <Link
                                                    href={`/events/${event.id}`}
                                                    className="mt-4 inline-block font-semibold text-purple-700 hover:underline"
                                                >
                                                    View event →
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-sm text-gray-500">
                                                    Applications opening soon
                                                </p>

                                                <span className="mt-4 inline-block font-semibold text-gray-400">
                                                    View event →
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}