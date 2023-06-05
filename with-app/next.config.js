const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    sassOptions: {
        indentType: 'tab',
        style: 'compressed',
        includePaths: [path.join(__dirname, 'src/styles/modules/')],
        charset: false,
    },

    reactStrictMode: true,

    poweredByHeader: false,

    modularizeImports: {
        lodash: {
            transform: 'lodash/{{member}}',
        },
    },

    experimental: {
        webpackBuildWorker: true,
        serverActions: true,
    },

    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['images.unsplash.com', 'images.metmuseum.org'],
        disableStaticImages: true,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    rewrites: async () => [
        {
            source: '/api/:path*',
            destination: process.env.BACK_INTERNAL_URL ?? '/api/:path*',
        },
    ],

    headers: async () => {
        if (process.env.NODE_ENV !== 'production') return [];

        const CachePublicMaxAge = process.env.CACHE_PUBLIC_MAX_AGE ?? 3600;

        const ContentSecurityPolicy = `
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            child-src ${process.env.NEXT_PUBLIC_FRONT_URL};
            style-src 'self' 'unsafe-inline' ${process.env.NEXT_PUBLIC_FRONT_URL};
            font-src 'self';  
        `;

        return [
            {
                source: '/:all*(svg|jpg|png|jpeg|woff|woff2|webp|ico)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=${CachePublicMaxAge}, stale-while-revalidate`,
                    },
                ],
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
                    },
                ],
            },
        ];
    },
};

const isProduction =
    process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_APP_ENV === 'PROD';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = isProduction ? nextConfig : withBundleAnalyzer(nextConfig);
