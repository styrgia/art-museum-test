export type CardAuthorProps = {
    src?: string;
    name: string;
    date: string;
};

export default function CardAuthor({ src, name, date }: CardAuthorProps) {
    return (
        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
                <span className="truncate text-sm">{name}</span>
            </div>

            <span className="text-xs text-gray-300 dark:text-gray-600">&bull;</span>

            <span className="truncate text-sm">{date}</span>
        </div>
    );
}
