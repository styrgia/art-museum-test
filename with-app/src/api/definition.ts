import { z } from 'zod';
import { makeApi, makeErrors } from '@zodios/core';

export const department = z.object({
    departmentId: z.number().positive(),
    displayName: z.string(),
});

export const object = z.object({
    objectID: z.number().positive(),
    isHighlight: z.boolean(),
    accessionNumber: z.string(),
    accessionYear: z.string(),
    isPublicDomain: z.boolean(),
    primaryImage: z.string(),
    primaryImageSmall: z.string(),
    additionalImages: z.array(z.string()),
    constituents: z.array(
        z.object({
            constituentID: z.number().positive(),
            role: z.string(),
            name: z.string(),
            constituentULAN_URL: z.string(),
            constituentWikidata_URL: z.string(),
            gender: z.string(),
        })
    ),
    department: z.string(),
    objectName: z.string(),
    title: z.string(),
    culture: z.string(),
    period: z.string(),
    dynasty: z.string(),
    reign: z.string(),
    portfolio: z.string(),
    artistRole: z.string(),
    artistPrefix: z.string(),
    artistDisplayName: z.string(),
    artistDisplayBio: z.string(),
    artistSuffix: z.string(),
    artistAlphaSort: z.string(),
    artistNationality: z.string(),
    artistBeginDate: z.string(),
    artistEndDate: z.string(),
    artistGender: z.string(),
    artistWikidata_URL: z.string(),
    artistULAN_URL: z.string(),
    objectDate: z.string(),
    objectBeginDate: z.number().positive(),
    objectEndDate: z.number().positive(),
    medium: z.string(),
    dimensions: z.string(),
    measurements: z
        .array(
            z.object({
                elementName: z.string(),
                elementDescription: z.string(),
                elementMeasurements: z.object({
                    Diameter: z.number(),
                }),
            })
        )
        .nullable(),
    creditLine: z.string(),
    geographyType: z.string(),
    city: z.string(),
    state: z.string(),
    county: z.string(),
    country: z.string(),
    region: z.string(),
    subregion: z.string(),
    locale: z.string(),
    locus: z.string(),
    excavation: z.string(),
    river: z.string(),
    classification: z.string(),
    rightsAndReproduction: z.string(),
    linkResource: z.string(),
    metadataDate: z.string(),
    repository: z.string(),
    objectURL: z.string(),
    tags: z
        .array(z.object({ term: z.string(), AAT_URL: z.string(), Wikidata_URL: z.string() }))
        .nullable(),
    objectWikidata_URL: z.string(),
    isTimelineWork: z.boolean(),
    GalleryNumber: z.string(),
});

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
        response: z.array(department),
        errors: errors,
    },
    {
        method: 'get',
        path: '/public/collection/v1/objects',
        alias: 'getObjects',
        response: objectsResponse,
        errors: errors,
        parameters: [],
    },
]);
