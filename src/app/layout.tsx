import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";

export const metadata: Metadata = {
    title: "Todo App",
    description: "A full-stack todo app with Google sign-in and optimistic updates",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <QueryProvider>{children}</QueryProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
