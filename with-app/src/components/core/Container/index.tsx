import clsx from 'clsx';
import { ReactNode } from 'react';

export type ContainerProps = {
    large?: boolean;
    className?: string;
    alt?: boolean;
    children: ReactNode;
};

export default function Container({ children, large, alt, className }: ContainerProps) {
    return (
        <div
            className={clsx(
                'container px-8 mx-auto xl:px-5',
                large ? ' max-w-screen-xl' : ' max-w-screen-lg',
                !alt && 'py-5 lg:py-8',
                className
            )}
        >
            {children}
        </div>
    );
}
