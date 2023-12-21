import prisma from "@/lib/prisma";
import { timeAgo } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import RefreshButton from "./refresh-button";
import { UpdateProblemButton } from "./update-problem-button";

export const LeetcodeTable = async () => {
    const startTime = Date.now();
    const problems = await prisma.leetcodeProblems.findMany();
    const duration = Date.now() - startTime;

    return (
        <div className="bg-white shadow-xl ring-1 ring-gray-900/5 rounded-lg max-w-full mx-6">
            <div className="rounded-lg p-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold">Leetcode</h2>
                    <RefreshButton />
                </div>
                <div className="flex justify-between items-center mb-2">
                    <p className="space-y-2 text-sm text-gray-500">
                        Fetched {problems.length} problems in {duration}ms
                    </p>
                </div>
            </div>
            <table className="table-auto w-full">
                <tbody className="rounded-lg divide-y divide-gray-600/5">
                    {problems
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((problem) => (
                            <tr key={problem.id}>
                                <td className="px-3 py-3 space-x-4">
                                    {problem.isComplete ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="fill-green-500 w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="fill-slate-500 w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                                                clipRule="evenodd"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </td>
                                <td className="py-3 space-y-1">
                                <p className="text-sm md:text-base font-medium leading-none">
                                        {problem.title}
                                    </p>
                                </td>
                                <td className="py-3 space-x-4">
                                    <div className="space-y-1">
                                        <Link
                                            href={problem.questionURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                                                <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </td>
                                <td className="py-3 hidden md:table-cell space-x-4">
                                    <div className="space-y-1">
                                        <Link
                                            href={problem.solutionURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell py-3 px-3 space-y-1">
                                    <p
                                        className={clsx(
                                            "p-1 text-xs rounded leading-none w-fit capitalize",
                                            {
                                                "bg-blue-400":
                                                    problem.difficulty ===
                                                    "HARD",
                                                "bg-yellow-400":
                                                    problem.difficulty ===
                                                    "MEDIUM",
                                                "bg-green-400":
                                                    problem.difficulty ===
                                                    "EASY",
                                            }
                                        )}
                                    >
                                        {problem.difficulty.toLocaleLowerCase()}
                                    </p>
                                </td>
                                <td className="hidden md:table-cell py-3 px-3 space-y-1">
                                    <div className="flex items-center">
                                        {problem.patternList.map((p) => (
                                            <p
                                                className="p-1 m-1 text-xs rounded bg-neutral-300 leading-none w-fit"
                                                key={`${problem.id}_${p}`}
                                            >
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </td>
                                <td className="hidden md:table-cell py-3 space-y-1">
                                    {problem.popularity === "HIGH" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.061l5.25-5.25a.75.75 0 0 1 1.06 0l3.074 3.073a20.923 20.923 0 0 1 5.545-4.931l-3.042-.815a.75.75 0 0 1-.53-.919Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : problem.popularity === "MEDIUM" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.22 5.222a.75.75 0 0 1 1.06 0L7 9.942l3.768-3.769a.75.75 0 0 1 1.113.058 20.908 20.908 0 0 1 3.813 7.254l1.574-2.727a.75.75 0 0 1 1.3.75l-2.475 4.286a.75.75 0 0 1-1.025.275l-4.287-2.475a.75.75 0 0 1 .75-1.3l2.71 1.565a19.422 19.422 0 0 0-3.013-6.024L7.53 11.533a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 0 1 0-1.06Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </td>
                                <td className="hidden md:table-cell px-3 text-sm text-gray-500">
                                    {timeAgo(problem.updatedAt)}
                                </td>
                                <td className="px-3 py-3">
                                    <UpdateProblemButton
                                        problemType="leetcode"
                                        isComplete={problem.isComplete}
                                        questionURL={problem.questionURL}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
