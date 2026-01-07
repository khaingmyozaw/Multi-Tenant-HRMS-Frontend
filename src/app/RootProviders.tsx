"use client"

import { ThemeProvider } from "@/context/ThemeProvider";

export function RootProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}
