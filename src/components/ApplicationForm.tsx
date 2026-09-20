"use client";

import { FormEvent, useState } from "react";

type VolunteerRole = {
    id: string;
    title: string;
    placesAvailable: number;
};

type ApplicationFormProps = {
    eventTitle: string;
    roles: VolunteerRole[];
};

export default function ApplicationForm({
    eventTitle,
    roles,
}: ApplicationFormProps) {
    const [submitted, setSubmitted] = useState(false);

    // For now this only shows a demo confirmation.
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    // Show confirmation after the form is submitted.
    if (submitted) {
        return (
            <div
                role="status"
                className="border border-green-200 bg-green-50 p-8"
            >
                <p className="text-sm font-bold uppercase tracking-wide text-green-800">
                    Application submitted
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                    Thank you for applying
                </h2>

                <p className="mt-4 leading-7 text-gray-700">
                    Your demo application for{" "}
                    <strong>{eventTitle}</strong> has been submitted.
                </p>

                <p className="mt-3 text-sm text-gray-600">
                    The application status will appear in My Applications once the
                    database is connected.
                </p>

                <a
                    href="/"
                    className="mt-7 inline-block bg-black px-6 py-3 font-semibold text-white hover:bg-purple-700"
                >
                    Back to opportunities
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Demo privacy note */}
            <div className="border-l-4 border-purple-700 bg-purple-50 p-4">
                <p className="font-semibold text-purple-900">
                    Demo form
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-700">
                    Please do not enter real personal or sensitive information in this
                    educational prototype.
                </p>
            </div>

            {/* Name */}
            <div>
                <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Full name *
                </label>

                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    maxLength={80}
                    placeholder="Enter your name"
                    className="mt-2 w-full border border-gray-300 px-4 py-3 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100"
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    University email *
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={120}
                    placeholder="name@example.edu.au"
                    className="mt-2 w-full border border-gray-300 px-4 py-3 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100"
                />
            </div>

            {/* Role */}
            <div>
                <label
                    htmlFor="role"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Volunteer role *
                </label>

                <select
                    id="role"
                    name="role"
                    required
                    defaultValue=""
                    className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100"
                >
                    <option value="" disabled>
                        Select a volunteer role
                    </option>

                    {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                            {role.title} — {role.placesAvailable} places available
                        </option>
                    ))}
                </select>
            </div>

            {/* Availability */}
            <div>
                <label
                    htmlFor="availability"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Your availability *
                </label>

                <textarea
                    id="availability"
                    name="availability"
                    required
                    rows={4}
                    maxLength={400}
                    placeholder="Example: I am available from 9:00 AM to 1:00 PM."
                    className="mt-2 w-full resize-y border border-gray-300 px-4 py-3 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100"
                />
            </div>

            {/* Motivation */}
            <div>
                <label
                    htmlFor="motivation"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Why would you like to volunteer?
                </label>

                <textarea
                    id="motivation"
                    name="motivation"
                    rows={5}
                    maxLength={600}
                    placeholder="Write a short response..."
                    className="mt-2 w-full resize-y border border-gray-300 px-4 py-3 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100"
                />

                <p className="mt-2 text-sm text-gray-500">
                    Optional — maximum 600 characters.
                </p>
            </div>

            {/* Confirmation */}
            <div className="flex items-start gap-3">
                <input
                    id="confirmation"
                    name="confirmation"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4"
                />

                <label
                    htmlFor="confirmation"
                    className="text-sm leading-6 text-gray-700"
                >
                    I confirm that the information provided is correct and I understand
                    this is an educational demonstration. *
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
            >
                Submit application
            </button>

            <p className="text-sm text-gray-500">
                * Required fields
            </p>
        </form>
    );
}