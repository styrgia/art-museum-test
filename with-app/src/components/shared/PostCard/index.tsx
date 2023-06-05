import clsx from 'clsx';

import { ArtObject } from '@/api/definition';

import CardAuthor from './author';
import CardCategory from './category';
import CardExcerpt from './excerpt';
import CardImage from './image';
import CardTitle from './title';

export type PostProps = {
    data: ArtObject;
    aspect?: 'landscape' | 'square';
    minimal?: boolean;
    preloadImage?: boolean;
    fontSize?: string;
    fontWeight?: string;
};

export default function PostCard({
    data,
    aspect = 'square',
    minimal,
    preloadImage,
    fontSize,
    fontWeight,
}: PostProps) {
    const href = `/object/${data.id}`;

    return (
        <div className={clsx('group cursor-pointer', minimal && 'grid gap-10 md:grid-cols-2')}>
            <CardImage
                aspect={aspect}
                src={data.primaryImageSmall}
                alt={data.title}
                href={href}
                preload={preloadImage}
            />

            <div className={clsx(minimal && 'flex items-center')}>
                <div>
                    <CardCategory categories={[data.department]} nomargin={minimal} />

                    <CardTitle
                        title={data.title}
                        href={href}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        minimal={minimal}
                    />

                    <CardExcerpt text={data.medium} href={href} />

                    <CardAuthor name={data.artistDisplayName} date={data.objectDate} />
                </div>
            </div>
        </div>
    );
}
