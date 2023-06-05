const lodash = require('lodash');
const fs = require('fs');

const { chunk } = lodash;

const departmentId = 3;

const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const writerStream = fs.createWriteStream(`department-${departmentId}.json`, { flags: 'a' });

writerStream.write('[');

const fetchIdsByDepartment = async departmentId => {
    try {
        const response = await fetch(baseUrl + `?departmentIds=${departmentId}`);

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const fetchObject = async id => {
    try {
        console.log('fetch ', id);

        const response = await fetch(baseUrl + id);

        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const makeObject = object => {
    return JSON.stringify({
        id: object.objectID,
        isHightlight: object.isHighlight,
        title: object.title,
        primaryImage: object.primaryImage,
        primaryImageSmall: object.primaryImageSmall,
        additionalImages: object.additionalImages,
        department: object.department,
        objectName: object.objectName,
        objectDate: object.objectDate,
        objectBeginDate: object.objectBeginDate,
        objectEndDate: object.objectEndDate,
        accessionYear: object.accessionYear,
        medium: object.medium,
        artistDisplayName: object.artistDisplayName,
        artistDisplayBio: object.artistDisplayBio,
        artistBeginDate: object.artistBeginDate,
        artistEndDate: object.artistEndDate,
        tags: object.tags,
    });
};

const getPromises = chunk =>
    chunk.map(async id => {
        const object = await fetchObject(id);

        if (object.primaryImage && object.primaryImage.length > 0) {
            console.log('id with image', id);

            writerStream.write(makeObject(object) + ',');
        }
    });

const launch = async () => {
    const ids = await fetchIdsByDepartment(departmentId);

    const chunks = chunk(ids, 100);

    for (currentChunk of chunks) {
        const chunkPromises = getPromises(currentChunk);

        await Promise.all(chunkPromises);

        await sleep(5000);
    }

    console.log('finish');
};

launch().catch(console.error);
