import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
    metadataBase: new URL("https://postgres-prisma.vercel.app"),
    title: "Abhijit Rao - 2024 Prep",
    description: "2024 Prep with Postgres and Prisma",
};

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.variable}>{children}</body>
        </html>
    );
}
