export type TextHeadProps = {
    title: string;
    desc: string;
};

export default function TextHead({ title, desc }: TextHeadProps) {
    return (
        <div className="flex flex-col mb-10">
            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                {title}
            </h1>
            <div className="text-center">
                <p className="text-lg">{desc}</p>
            </div>
        </div>
    );
}
