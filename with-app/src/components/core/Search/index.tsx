import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent } from 'react';

export type SearchInputProps = {
    q: string;
    handleChange: (e: ChangeEvent) => void;
    placeholder: string;
};

export default function SearchInput({ q, handleChange, placeholder }: SearchInputProps) {
    return (
        <div className="relative">
            <input
                type="text"
                defaultValue={q}
                placeholder={placeholder}
                name="q"
                id="q"
                className="w-full px-3 py-2 border rounded-md outline-none focus:border-gray-300 focus:shadow-sm dark:bg-gray-900 dark:border-gray-600 dark:focus:border-white"
                onChange={handleChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
            </div>
        </div>
    );
}
