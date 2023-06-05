import { ArtObject } from '@/api/definition';
import PostCard from '@/components/shared/PostCard';

const fetchCategoryObjects = async (id: string) => {
    const response = await fetch(
        `http://localhost:3000/api/getCategoryObjects?${new URLSearchParams({ id }).toString()}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const result = await response.json();

    return result as ArtObject[];
};

export default async function CategoryPage({ params }: { params: { id: string } }) {
    const artObjects = await fetchCategoryObjects(params.id);

    return (
        <>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
                {artObjects.map(artObject => (
                    <PostCard key={artObject.id} data={artObject} aspect="square" />
                ))}
            </div>
        </>
    );
}
