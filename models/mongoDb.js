let db;

function setDb(database) {
    db = database;
}

async function findOne(collectionName, data, option = {}) {
    try {
        const result = await db.collection(collectionName).findOne(data, option);
        return result;
    } catch (error) {
        console.error("Error findOne:", error);
        throw error;
    }
}

async function insertOne(collectionName, data) {
    try {
        const result = await db.collection(collectionName).insertOne(data);
        return result;
    } catch (error) {
        console.error("Error insertOne:", error);
        throw error;
    }
}

async function updateOne(collectionName, findParams, updateParams) {
    try {
        const result = await db.collection(collectionName).updateOne(findParams, updateParams);
        return result;
    } catch (error) {
        console.error("Error updateOne:", error);
        throw error;
    }
}

async function aggregate(collectionName, pipeline) {
    try {
        const result = await db.collection(collectionName).aggregate(pipeline).toArray();
        return result;
    } catch (error) {
        console.error("Error updateOne:", error);
        throw error;
    }
}


module.exports = { setDb, findOne, insertOne, updateOne, aggregate };
