import 'dotenv/config'
import { expect, test } from 'vitest'

import {Configuration, DocumentApi} from "./lib/onshape_api";
import APIKeyAuthMiddleware from "./lib/authMiddleware";
import {OnshapeClient} from "./lib/onshapeClient";

const secretKey = process.env.ONSHAPE_SECRET_KEY
const accessKey = process.env.ONSHAPE_ACCESS_KEY


test("get document versions", async () => {
    const config = new Configuration({
        middleware: [
            APIKeyAuthMiddleware(secretKey, accessKey)
        ]
    });

    const did = "f00ba40ee71d7a9324b5af07"

    const docApi = new DocumentApi(config)

    const docVersions = await docApi.getDocumentVersions({did})
    // console.log(docVersions);

    expect(docVersions).toHaveLength(2)


    const client = new OnshapeClient(config);
    const docVersions2 = await client.DocumentApi.getDocumentVersions({did});
    // console.log(docVersions2)
    expect(docVersions2).toEqual(docVersions)
})
