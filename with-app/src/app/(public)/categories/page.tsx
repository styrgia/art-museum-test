import { Department } from '@/api/definition';
import CategoriesList from '@/components/features/Categories';
import { FRONT_URL } from '@/api';

const fetchCategories = async () => {
    const response = await fetch(`${FRONT_URL}/api/getCategories`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const result = await response.json();

    return result as Department[];
};

export default async function CategoriesPage() {
    const categories = await fetchCategories();

    return <CategoriesList categories={categories} />;
}
