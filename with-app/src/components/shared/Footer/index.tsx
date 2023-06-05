import Container from 'core/Container';
import ThemeSwitch from 'core/ThemeSwitch';

export default function Footer() {
    return (
        <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
            <div className="text-center text-sm">
                Copyright © {new Date().getFullYear()}. All rights reserved.
            </div>
            <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
                <span>&middot;</span>
                <span>

                    <a
                        href="https://github.com/web3templates/stablo"
                        rel="noopener"
                        target="_blank"
                    >
                        Github
                    </a>
                </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
                <div className="mt-5" />
                <ThemeSwitch />
            </div>
        </Container>
    );
}
