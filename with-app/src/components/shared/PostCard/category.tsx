import Label, { allColors } from 'core/Label';
import Link from 'next/link';

export type Category = {
    id: string;
    color: keyof typeof allColors;
    title: string;
};

export type CardCategoryProps = {
    nomargin?: boolean;
    categories: string[];
};

const categoriesConfig = {
    'European Paintings': {
        id: 11,
        color: 'purple',
        title: 'European Paintings',
    },
    Photographs: {
        id: 19,
        color: 'green',
        title: 'Photographs',
    },
};

export default function CardCategory({ categories, nomargin = false }: CardCategoryProps) {
    return (
        <div className="flex gap-3">
            {categories?.map(category => (
                <Link
                    key={categoriesConfig[category].id}
                    href={`/categories/${categoriesConfig[category].id}`}
                >
                    <Label nomargin={nomargin} color={categoriesConfig[category].color}>
                        {categoriesConfig[category].title}
                    </Label>
                </Link>
            ))}
        </div>
    );
}
