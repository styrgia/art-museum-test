import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

export default function Logo({ open }: { open: boolean }) {
    return (
        <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="/" className="w-28 dark:hidden">
                <span className="block text-center">Art museum</span>
            </Link>
            <Link href="/" className="hidden w-28 dark:block">
                <span className="block text-center">Art museum</span>
            </Link>
            <Disclosure.Button
                aria-label="Toggle Menu"
                className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden "
            >
                <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    {open && (
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                    )}
                    {!open && (
                        <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                    )}
                </svg>
            </Disclosure.Button>
        </div>
    );
}
