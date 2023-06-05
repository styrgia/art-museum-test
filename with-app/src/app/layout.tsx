import '@/styles/tailwind.css';

import { Inter, Lora } from 'next/font/google';
import React, { ReactNode } from 'react';

import ClientProviders from './providers';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
});

export const metadata = {
    title: 'Art museum sandbox',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html suppressHydrationWarning lang="ru" className={`${inter.variable} ${lora.variable}`}>
            <body className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
                <main>
                    <ClientProviders>{children}</ClientProviders>
                </main>
            </body>
        </html>
    );
}
