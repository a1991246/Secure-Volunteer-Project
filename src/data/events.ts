// Sample event data for now.
// Later we will connect this to Supabase.

export type VolunteerRole = {
    id: string;
    title: string;
    description: string;
    placesAvailable: number;
};

export type Event = {
    id: string;
    title: string;
    category: string;
    description: string;
    date: string;
    startTime: string;
    endTime: string;
    campus: string;
    location: string;
    organiser: string;
    contactEmail: string;
    capacity: number;
    placesAvailable: number;
    status: "Open" | "Closed" | "Full";
    requirements: string[];
    roles: VolunteerRole[];
};

// Events shown on the demo website.
export const events: Event[] = [
    {
        id: "ingenuity-2026",
        title: "Ingenuity 2026",
        category: "STEM & Community",
        description:
            "Support a university event showcasing student innovation, technology and engineering projects. Volunteers will assist visitors, support event activities and help the event team deliver a welcoming experience.",
        date: "11 November 2026",
        startTime: "9:00 AM",
        endTime: "5:00 PM",
        campus: "Adelaide City",
        location: "Adelaide Convention Centre, North Terrace, Adelaide SA",
        organiser: "Adelaide University Events",
        contactEmail: "events@example.edu.au",
        capacity: 30,
        placesAvailable: 12,
        status: "Open",

        requirements: [
            "Current Adelaide University student or approved volunteer",
            "Available for the allocated volunteer shift",
            "Follow event safety and conduct requirements",
            "Complete the volunteer briefing before the event",
        ],

        roles: [
            {
                id: "registration",
                title: "Registration Support",
                description:
                    "Welcome attendees, assist with registration and direct visitors to event areas.",
                placesAvailable: 4,
            },
            {
                id: "visitor-support",
                title: "Visitor Support",
                description:
                    "Help attendees locate exhibits, facilities and university information.",
                placesAvailable: 5,
            },
            {
                id: "event-support",
                title: "Event Support",
                description:
                    "Assist event coordinators with general event activities.",
                placesAvailable: 3,
            },
        ],
    },

    {
        id: "wellbeing-expo",
        title: "Student Wellbeing Expo",
        category: "Wellbeing",
        description:
            "Help deliver a student wellbeing event and support attendees throughout the day.",
        date: "18 November 2026",
        startTime: "10:00 AM",
        endTime: "3:00 PM",
        campus: "Mawson Lakes",
        location: "Mawson Lakes Campus",
        organiser: "Student Experience Team",
        contactEmail: "wellbeing@example.edu.au",
        capacity: 20,
        placesAvailable: 8,
        status: "Open",

        requirements: [
            "Available during the allocated shift",
            "Attend the volunteer briefing",
        ],

        roles: [
            {
                id: "welcome",
                title: "Welcome Volunteer",
                description:
                    "Welcome students and help them find their way around the event.",
                placesAvailable: 4,
            },
            {
                id: "activity-support",
                title: "Activity Support",
                description:
                    "Help staff with activities and information booths.",
                placesAvailable: 4,
            },
        ],
    },
];