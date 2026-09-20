"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type ProtectedLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

export default function ProtectedLink({
    href,
    children,
    className = "",
}: ProtectedLinkProps) {
    const router = useRouter();

    const handleClick = () => {
        // Check both session and remembered login.
        const isLoggedIn =
            sessionStorage.getItem("demoLoggedIn") === "true" ||
            localStorage.getItem("demoLoggedIn") === "true";

        if (isLoggedIn) {
            router.push(href);
            return;
        }

        // Remember where the student wanted to go.
        sessionStorage.setItem("returnAfterLogin", href);

        router.push("/login");
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={className}
        >
            {children}
        </button>
    );
}