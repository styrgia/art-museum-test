import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export type CardImageProps = {
    href: string;
    aspect: 'landscape' | 'square';
    src?: string;
    alt?: string;
    preload?: boolean;
};

export default function CardImage({ preload, src, alt, href, aspect }: CardImageProps) {
    return (
        <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
            <Link href={href} className="relative block aspect-square">
                {src ? (
                    <Image
                        fill
                        src={src}
                        alt={alt || 'Thumbnail'}
                        priority={preload}
                        className="object-cover transition-all"
                        sizes="(max-width: 768px) 30vw, 33vw"
                    />
                ) : (
                    <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                        <PhotoIcon />
                    </span>
                )}
            </Link>
        </div>
    );
}
