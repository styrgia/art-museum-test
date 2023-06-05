import Image from 'next/image';
import Link from 'next/link';

import { Department } from '@/api/definition';
import Container from '@/components/core/Container';
import TextHead from '@/components/shared/TextHead';

export default function CategoriesList({ categories }: { categories: Department[] }) {
    return (
        <>
            <TextHead title="All categories" desc="list of available categories" />
            <div className="grid gap-10 mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
                {categories.map(category => (
                    <Link key={category.departmentId} href={`/categories/${category.departmentId}`}>
                        <div>
                            <div className="relative block aspect-landscape mb-2 hover:scale-105 transition-transform">
                                {category.image && (
                                    <Image
                                        fill
                                        src={category.image}
                                        alt={category.displayName}
                                        className="rounded-md"
                                    />
                                )}
                            </div>
                            <div>{category.displayName}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
