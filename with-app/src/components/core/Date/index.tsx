import clsx from 'clsx';
import dayjs from 'dayjs';

export type DateTimeProps = {
    date: string;
    className?: string;
};

export default function DateTime({ date, className }: DateTimeProps) {
    return (
        <time className={clsx(className)} dateTime={date}>
            {dayjs(date).format('MMMM DD, YYYY')}
        </time>
    );
}
