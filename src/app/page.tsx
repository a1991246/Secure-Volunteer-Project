"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import DemoBanner from "@/components/DemoBanner";

// Demo events for now.
// Later this data will come from Supabase.
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

export default function Home() {
  const [search, setSearch] = useState("");
  const [campus, setCampus] = useState("");
  const [category, setCategory] = useState("");

  // Show events matching the selected filters.
  const filteredEvents = useMemo(() => {
    return demoEvents.filter((event) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        searchText === "" ||
        event.title.toLowerCase().includes(searchText) ||
        event.description.toLowerCase().includes(searchText) ||
        event.campus.toLowerCase().includes(searchText) ||
        event.category.toLowerCase().includes(searchText);

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
    <main className="min-h-screen bg-white text-[#171717]">
      <DemoBanner />

      {/* Small top menu */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl justify-end gap-6 px-6 py-3 text-sm">
          <a href="#" className="hover:underline">
            Current students
          </a>

          <a href="#" className="hover:underline">
            Volunteer support
          </a>

          <a href="#" className="hover:underline">
            Contact
          </a>

          {/* Opens the login page */}
          <Link
            href="/login"
            className="font-semibold hover:text-purple-700 hover:underline"
          >
            Sign in
          </Link>
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

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 font-medium lg:flex"
          >
            <Link
              href="/"
              className="text-purple-700"
            >
              Discover
            </Link>

            <Link
              href="/my-applications"
              className="hover:text-purple-700"
            >
              My Applications
            </Link>

            <a
              href="#"
              className="hover:text-purple-700"
            >
              My Shifts
            </a>

            <a
              href="#"
              className="hover:text-purple-700"
            >
              Profile
            </a>

            {/* Student portal opens login for now */}
            <Link
              href="/login"
              className="bg-black px-5 py-3 text-white transition hover:bg-purple-700"
            >
              Student Portal
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero area */}
      <section className="relative overflow-hidden bg-[#f3f1ed]">
        <div className="absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-purple-700" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
              Student / Volunteer Portal
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Make your next
              <span className="block text-purple-700">
                contribution count.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-700 md:text-xl">
              Discover volunteering opportunities across Adelaide University,
              apply for roles and manage your activities in one secure place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#opportunities"
                className="bg-black px-7 py-4 font-semibold text-white transition hover:bg-purple-700"
              >
                Browse opportunities
              </a>

              <a
                href="#student-tools"
                className="border border-black px-7 py-4 font-semibold transition hover:bg-white"
              >
                View my activities
              </a>
            </div>
          </div>

          {/* Featured opportunity */}
          <div className="relative hidden min-h-[410px] lg:block">
            <div className="absolute left-12 top-10 h-[330px] w-[330px] rounded-full bg-purple-200" />

            <div className="absolute left-28 top-20 w-[370px] bg-white p-8 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
                Featured opportunity
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Ingenuity 2026
              </h2>

              <p className="mt-3 text-gray-600">
                Adelaide City
              </p>

              <p className="mt-5 leading-7 text-gray-700">
                Support a university event showcasing student innovation,
                technology and engineering projects.
              </p>

              <div className="mt-7 border-t border-gray-200 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">
                    STEM & Community
                  </span>

                  <span className="text-sm text-gray-500">
                    12 places available
                  </span>
                </div>

                <Link
                  href="/events/ingenuity-2026"
                  className="mt-6 inline-block font-semibold text-purple-700 hover:underline"
                >
                  View event →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <label
                htmlFor="event-search"
                className="sr-only"
              >
                Search events
              </label>

              <input
                id="event-search"
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search events..."
                className="w-full bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Campus filter */}
            <div>
              <label
                htmlFor="campus-filter"
                className="sr-only"
              >
                Select campus
              </label>

              <select
                id="campus-filter"
                value={campus}
                onChange={(event) =>
                  setCampus(event.target.value)
                }
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
              <label
                htmlFor="category-filter"
                className="sr-only"
              >
                Select category
              </label>

              <select
                id="category-filter"
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
                className="w-full bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">
                  All categories
                </option>

                <option value="STEM">
                  STEM
                </option>

                <option value="Wellbeing">
                  Wellbeing
                </option>

                <option value="Mentoring">
                  Mentoring
                </option>
              </select>
            </div>

            {/* Clear filters */}
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

        {/* No event results */}
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
              className="mt-6 bg-black px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
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

      {/* Student tools */}
      <section
        id="student-tools"
        className="bg-[#f3f1ed]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
            Student / Volunteer Portal
          </p>

          <h2 className="mt-3 text-4xl font-semibold">
            Manage your volunteering
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* My Applications */}
            <article className="bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-800">
                1
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                My Applications
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                View the volunteer roles you have applied for and track their
                current status.
              </p>

              <Link
                href="/my-applications"
                className="mt-6 inline-block font-semibold text-purple-700 hover:underline"
              >
                View applications →
              </Link>
            </article>

            {/* My Shifts */}
            <article className="bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-800">
                2
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                My Shifts
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Check your approved volunteer roles, dates, times and assigned
                activities.
              </p>

              <button className="mt-6 font-semibold text-purple-700 hover:underline">
                View shifts →
              </button>
            </article>

            {/* Profile */}
            <article className="bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-800">
                3
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                My Profile
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Manage your profile information and volunteering preferences.
              </p>

              <button className="mt-6 font-semibold text-purple-700 hover:underline">
                Manage profile →
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Demo information */}
      <section className="bg-[#ece7ff]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="font-semibold text-purple-900">
            Educational demonstration
          </p>

          <p className="mt-2 max-w-3xl leading-7 text-gray-700">
            This website is a prototype for the Secure Volunteer and Event
            Coordination Platform project. It demonstrates the planned student
            and volunteer experience and is not an official Adelaide University
            production service.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">
              Adelaide University
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              Volunteer & Event Coordination Demo
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Volunteer Portal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
              <a
                href="#opportunities"
                className="hover:text-white"
              >
                Discover opportunities
              </a>

              <Link
                href="/my-applications"
                className="hover:text-white"
              >
                My applications
              </Link>

              <a
                href="#"
                className="hover:text-white"
              >
                My shifts
              </a>

              <a
                href="#"
                className="hover:text-white"
              >
                Profile
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Prototype Notice
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Educational demonstration only. Not an official Adelaide
              University production service.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}