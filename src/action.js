const core = require('@actions/core');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
// const github = require('@actions/github');

async function run() {
    if(process.env.GCLOUD_PROJECT === 'undefined') {
        throw new Error("Ensure that you use 'google-github-actions/auth@v0' before executing this action.");
    }

    const BUCKET_NAME = core.getInput('bucket_name');
    const BUILD_PATH  = core.getInput('build_path');

    const storage = new Storage();
    const bucket  = storage.bucket(BUCKET_NAME);

    // Delete all files in bucket
    await bucket.deleteFiles();
    // await bucket.upload(BUILD_PATH);

    console.log(BUILD_PATH);
    const output = fs.readdirSync(BUILD_PATH);
    console.log(output);
}

run().catch(err => console.error(err));