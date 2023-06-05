import clsx from 'clsx';
import Link from 'next/link';

export type CardTitleProps = {
    title: string;
    href: string;
    fontSize?: string;
    minimal?: boolean;
    fontWeight?: string;
};

export default function CardTitle({ title, href, fontSize, minimal, fontWeight }: CardTitleProps) {
    let font = 'text-lg';

    if (fontSize === 'large') {
        font = 'text-2xl';
    }

    if (minimal) {
        font = 'text-3xl';
    }

    return (
        <h2
            className={clsx(
                font,
                fontWeight === 'normal'
                    ? 'line-clamp-2 font-medium  tracking-normal text-black'
                    : 'font-semibold leading-snug tracking-tight',
                'mt-2    dark:text-white'
            )}
        >
            <Link href={href}>
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                    {title}
                </span>
            </Link>
        </h2>
    );
}
