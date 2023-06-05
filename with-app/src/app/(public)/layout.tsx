import Container from '@/components/core/Container';
import { ReactNode } from 'react';
import Footer from 'shared/Footer';
import Header from 'shared/Header';

export default function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />

            <Container>{children}</Container>

            <Footer />
        </>
    );
}
