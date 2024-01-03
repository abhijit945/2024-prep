import prisma from '@/lib/prisma';
import { timeAgo } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import RefreshButton from './refresh-button';
import { UpdateProblemButton } from './update-problem-button';

export const LeetcodeTable = async () => {
    const startTime = Date.now();
    const problems = await prisma.leetcodeProblems.findMany();
    const duration = Date.now() - startTime;

    return (
        <div className='bg-white shadow-xl ring-1 ring-gray-900/5 rounded-lg max-w-full mx-6'>
            <div className='rounded-lg p-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold'>Leetcode</h2>
                    <RefreshButton />
                </div>
                <div className='flex justify-between items-center mb-2'>
                    <p className='space-y-2 text-sm text-gray-500'>
                        Fetched {problems.length} problems in {duration}ms
                    </p>
                </div>
            </div>
            <table className='table-auto w-full'>
                <tbody className='rounded-lg divide-y divide-gray-600/5'>
                    {problems
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((problem) => (
                            <tr key={problem.id}>
                                <td className='px-3 py-3 space-x-4'>
                                    {problem.isComplete ? (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            fill='currentColor'
                                            className='fill-green-500 w-8 h-8'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth={1.5}
                                            stroke='currentColor'
                                            className='stroke-slate-500 w-8 h-8'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                                            />
                                        </svg>
                                    )}
                                </td>
                                <td className='flex items-center text-center py-3'>
                                    <p className='text-sm md:text-base font-medium leading-none'>
                                        {problem.title}
                                    </p>
                                    <div className='space-y-1 px-3'>
                                        <Link
                                            href={problem.questionURL}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 24 24'
                                                fill='currentColor'
                                                className='w-5 h-5'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </td>
                                <td className='py-3 hidden md:table-cell space-x-4'>
                                    <div className='space-y-1'>
                                        <Link
                                            href={problem.solutionURL}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 24 24'
                                                fill='currentColor'
                                                className='w-5 h-5'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </td>
                                <td className='hidden md:table-cell py-3 px-3 space-y-1'>
                                    <p
                                        className={clsx(
                                            'p-1 text-xs rounded leading-none w-fit capitalize',
                                            {
                                                'bg-blue-400':
                                                    problem.difficulty ===
                                                    'HARD',
                                                'bg-yellow-400':
                                                    problem.difficulty ===
                                                    'MEDIUM',
                                                'bg-green-400':
                                                    problem.difficulty ===
                                                    'EASY',
                                            }
                                        )}
                                    >
                                        {problem.difficulty.toLocaleLowerCase()}
                                    </p>
                                </td>
                                <td className='hidden md:table-cell py-3 px-3 space-y-1'>
                                    <div className='flex items-center'>
                                        {problem.patternList.map((p) => (
                                            <p
                                                className='p-1 m-1 text-xs rounded bg-neutral-300 leading-none w-fit'
                                                key={`${problem.id}_${p}`}
                                            >
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </td>
                                <td className='hidden md:table-cell py-3 space-y-1'>
                                    {problem.popularity === 'HIGH' ? (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            className='w-5 h-5'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.061l5.25-5.25a.75.75 0 0 1 1.06 0l3.074 3.073a20.923 20.923 0 0 1 5.545-4.931l-3.042-.815a.75.75 0 0 1-.53-.919Z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    ) : problem.popularity === 'MEDIUM' ? (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth={1.5}
                                            stroke='currentColor'
                                            className='w-5 h-5'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M5 12h14'
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            className='w-5 h-5'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M1.22 5.222a.75.75 0 0 1 1.06 0L7 9.942l3.768-3.769a.75.75 0 0 1 1.113.058 20.908 20.908 0 0 1 3.813 7.254l1.574-2.727a.75.75 0 0 1 1.3.75l-2.475 4.286a.75.75 0 0 1-1.025.275l-4.287-2.475a.75.75 0 0 1 .75-1.3l2.71 1.565a19.422 19.422 0 0 0-3.013-6.024L7.53 11.533a.75.75 0 0 1-1.06 0l-5.25-5.25a.75.75 0 0 1 0-1.06Z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    )}
                                </td>
                                <td className='hidden md:table-cell px-3 text-sm text-gray-500'>
                                    {timeAgo(problem.updatedAt)}
                                </td>
                                <td className='px-3 py-3'>
                                    <UpdateProblemButton
                                        problemType='leetcode'
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
