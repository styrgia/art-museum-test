import { makeApi, makeErrors } from '@zodios/core';
import { z } from 'zod';

export const department = z.object({
    departmentId: z.number().positive(),
    displayName: z.string(),
    image: z.string().optional(),
    disabled: z.boolean(),
});

export const departmentResponse = z.object({
    departments: z.array(department),
});

export type Department = z.infer<typeof department>;

export const searchReponse = z.object({
    total: z.number(),
    objectIDs: z.array(z.number()).nullable(),
});

export const object = z.object({
    id: z.number(),
    isHightlight: z.boolean(),
    title: z.string(),
    primaryImage: z.string(),
    primaryImageSmall: z.string(),
    additionalImages: z.array(z.string()),
    department: z.string(),
    objectName: z.string(),
    objectDate: z.string(),
    objectBeginDate: z.number(),
    objectEndDate: z.number(),
    accessionYear: z.string(),
    medium: z.string(),
    artistDisplayName: z.string(),
    artistDisplayBio: z.string(),
    artistBeginDate: z.string(),
    artistEndDate: z.string(),
});

export type ArtObject = z.infer<typeof object>;

export const objectsResponse = z.object({
    total: z.number(),
    objectIDs: z.array(z.number().positive()),
});

export const errors = makeErrors([
    {
        status: 'default',
        description: 'Default error',
        schema: z.object({
            error: z.object({
                code: z.string(),
                message: z.string(),
            }),
        }),
    },
]);

export const museumApi = makeApi([
    {
        method: 'get',
        path: '/public/collection/v1/departments',
        alias: 'getDepartments',
        response: departmentResponse,
        errors,
    },
    {
        method: 'get',
        path: '/public/collection/v1/search',
        alias: 'getSearch',
        response: searchReponse,
        errors,
        parameters: [
            {
                name: 'q',
                type: 'Query',
                schema: z.string().optional(),
            },
            {
                name: 'hasImages',
                type: 'Query',
                schema: z.boolean().default(true),
            },
            {
                name: 'dateBegin',
                type: 'Query',
                schema: z.string().datetime().optional(),
            },
            {
                name: 'dateEnd',
                type: 'Query',
                schema: z.string().datetime().optional(),
            },
            {
                name: 'departmentId',
                type: 'Query',
                schema: z.number().optional(),
            },
        ],
    },
    {
        method: 'get',
        path: '/public/collection/v1/objects',
        alias: 'getObjects',
        response: objectsResponse,
        errors,
        parameters: [
            {
                name: 'departmentIds',
                type: 'Query',
                schema: z.string(),
            },
        ],
    },
    {
        method: 'get',
        path: '/public/collection/v1/objects/:id',
        alias: 'getObject',
        response: object,
        errors,
    },
]);
