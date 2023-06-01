// eslint-disable-next-line camelcase
import { Vina_Sans } from 'next/font/google';
import React, { ReactNode } from 'react';

import ClientProviders from './providers';

export const metadata = {
    title: 'Nextjs Starter',
    description: 'Default starter for projects',
};

const vinaSans = Vina_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    fallback: [
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
    ],
    variable: '--font-vina-sans',
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" className={`${vinaSans.variable}`}>
            <body>
                <main>
                    <ClientProviders>{children}</ClientProviders>
                </main>
            </body>
        </html>
    );
}
