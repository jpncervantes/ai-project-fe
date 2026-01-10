"use client";

const { useRouter, usePathname } = require("next/navigation");
const { useEffect, useState } = require("react");

const ProtectedRoute = ({ children }) => {
    const router = useRouter();

    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token) {
            router.replace("/login");
        } else {
            setIsAuthChecked(true);
        }
    }, [router]);

    // Only render children after auth check
    if (!isAuthChecked) return null;

    return children;
};

export default ProtectedRoute;
