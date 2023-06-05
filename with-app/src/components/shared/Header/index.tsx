'use client';

import { Disclosure } from '@headlessui/react';
import Container from 'core/Container';
import Link from 'next/link';
import { Fragment } from 'react';

import Logo from './logo';

const menu = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Categories',
        href: '/categories',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

export default function Header() {
    return (
        <Container>
            <nav>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
                                <Logo open={open} />

                                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                                    {menu.map((item, index) => (
                                        <Fragment key={`${item.label}${index}`}>
                                            <Link
                                                key={`${item.label}${index}`}
                                                href={item.href}
                                                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                                            >
                                                {item.label}
                                            </Link>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                            <Disclosure.Panel>
                                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                                    {menu.map((item, index) => (
                                        <Fragment key={`${item.label}${index}`}>
                                            <Link
                                                key={`${item.label}${index}`}
                                                href={item.href}
                                                className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                                            >
                                                {item.label}
                                            </Link>
                                        </Fragment>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </nav>
        </Container>
    );
}
