import { ErrorBoundary, ErrorBoundaryProps } from 'react-error-boundary';
import React from 'react';

type ErrorFallbackProps = {
    error: { message: string };
    resetError: () => void;
};

function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
    return (
        <div role="alert">
            <div>Что-то пошло не так:</div>

            <pre>{error.message}</pre>

            <button type="button" onClick={resetError}>
                Попробовать еще
            </button>
        </div>
    );
}

function Boundary({ children, fallback, onError, onReset }: ErrorBoundaryProps) {
    return (
        <ErrorBoundary fallback={fallback ?? ErrorFallback} onError={onError} onReset={onReset}>
            {children}
        </ErrorBoundary>
    );
}

export default Boundary;
