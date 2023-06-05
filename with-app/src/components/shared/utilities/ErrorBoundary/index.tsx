'use-client';

import React, { ReactNode } from 'react';
import { ErrorBoundary, ErrorBoundaryProps } from 'react-error-boundary';

type ErrorFallbackProps = {
    error: { message: string };
};

function ErrorFallback({ error }: ErrorFallbackProps) {
    return (
        <div role="alert">
            <div>Что-то пошло не так:</div>

            <pre style={{ color: 'red' }}>{error.message}</pre>
        </div>
    );
}

function Boundary({ children, onError, onReset }: { children: ReactNode } & ErrorBoundaryProps) {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError} onReset={onReset}>
            {children}
        </ErrorBoundary>
    );
}

export default Boundary;
