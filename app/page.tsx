import { AlgoExpertTable } from "@/components/algoExpertTable";
import { LeetcodeTable } from "@/components/leetcodeTable";
import { TablePlaceholder } from "@/components/table-placeholder";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col space-y-2">
            <h1 className="shadow-lg shadow-cyan-500/40 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-6 m-2 rounded-lg flex items-center sticky top-0 z-20 transition-all text-4xl">
                Preparation 2024
            </h1>
            <Suspense fallback={<TablePlaceholder />}>
                <AlgoExpertTable />
            </Suspense>
            <Suspense fallback={<TablePlaceholder />}>
                <LeetcodeTable />
            </Suspense>
        </main>
    );
}
