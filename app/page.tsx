import { AlgoExpertTable } from '@/components/algoExpertTable';
import { LeetcodeTable } from '@/components/leetcodeTable';
import { TablePlaceholder } from '@/components/table-placeholder';
import Image from 'next/image';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <main className='relative flex min-h-screen flex-col space-y-2'>
            <h1 className='shadow-lg gap-4 shadow-cyan-500/40 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-6 py-12 m-1 rounded-lg flex items-center sticky top-0 z-20 transition-all text-3xl justify-center md:justify-start'>
                <Image height={96} width={96} src='/brand.png' alt='brand' />
                The Grind
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
