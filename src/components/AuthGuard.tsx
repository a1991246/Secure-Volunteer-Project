"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type AuthGuardProps = {
    children: ReactNode;
};

export default function AuthGuard({
    children,
}: AuthGuardProps) {
    const router = useRouter();
    const pathname = usePathname();

    const [checking, setChecking] = useState(true);
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const isLoggedIn =
            sessionStorage.getItem("demoLoggedIn") === "true" ||
            localStorage.getItem("demoLoggedIn") === "true";

        if (!isLoggedIn) {
            // Remember the protected page.
            sessionStorage.setItem(
                "returnAfterLogin",
                pathname
            );

            router.replace("/login");
            return;
        }

        setAllowed(true);
        setChecking(false);
    }, [pathname, router]);

    if (checking) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center bg-[#f3f1ed]">
                <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#7C00E8]" />

                    <p className="mt-4 font-medium text-gray-600">
                        Checking access...
                    </p>
                </div>
            </div>
        );
    }

    if (!allowed) {
        return null;
    }

    return <>{children}</>;
}