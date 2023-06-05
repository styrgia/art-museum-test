import { Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';

import { museumApi } from './definition';

export const BASE_URL = 'https://collectionapi.metmuseum.org';
export const FRONT_URL = 'http://localhost:3000';

export const apiClient = new Zodios(BASE_URL, museumApi);
export const apiHooks = new ZodiosHooks('museumApi', apiClient);
