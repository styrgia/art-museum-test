import Link from 'next/link';

export type CardExcerptProps = {
    text?: string;
    href?: string;
};

export default function CardExcerpt({ text, href }: CardExcerptProps) {
    return (
        <div>
            {text && href && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <Link href={href}>{text}</Link>
                </p>
            )}
        </div>
    );
}
