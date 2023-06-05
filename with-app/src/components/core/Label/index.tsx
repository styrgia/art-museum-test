import clsx from 'clsx';
import { ReactNode } from 'react';

export const allColors = {
    green: 'text-emerald-700',
    blue: 'text-blue-600',
    orange: 'text-orange-700',
    purple: 'text-purple-600',
    pink: 'text-pink-600',
};

export type LabelProps = {
    nomargin: boolean;
    children: ReactNode;
    color: keyof typeof allColors;
    pill?: boolean;
};

export default function Label({ nomargin, children, color, pill }: LabelProps) {
    if (pill) {
        return (
            <div className="inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300">
                {children}
            </div>
        );
    }

    return (
        <span
            className={clsx(
                'inline-block text-xs font-medium tracking-wider uppercase ',
                !nomargin && ' mt-5',
                allColors[color] || allColors.pink
            )}
        >
            {children}
        </span>
    );
}
