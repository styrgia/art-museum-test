import { FRONT_URL } from '@/api';
import { ArtObject } from '@/api/definition';
import PostCard from '@/components/shared/PostCard';

const fetchHighlightObjects = async () => {
    const response = await fetch(`${FRONT_URL}/api/getHighlights`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const result = await response.json();

    return result as ArtObject[];
};

export default async function IndexPage() {
    const artObjects = await fetchHighlightObjects();

    return (
        <>
            <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
                {artObjects.slice(0, 2).map(object => (
                    <PostCard key={object.id} preloadImage data={object} aspect="landscape" />
                ))}
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
                {artObjects.slice(2, 14).map(object => (
                    <PostCard key={object.id} data={object} aspect="square" />
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <button
                    type="button"
                    className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
                >
                    <span>Load more</span>
                </button>
            </div>
        </>
    );
}
