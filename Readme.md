Onshape Typescript Fetch client
===============================

REST Api client for Onshape generated from Openapi spec https://cad.onshape.com/api/openapi using the typescript-fetch generator.

See example.ts for a full working example.
```typescript
import 'dotenv/config'

import {Configuration, DocumentApi} from "./onshape_api";
import APIKeyAuthMiddleware from "./authMiddleware";
import {OnshapeClient} from "./onshapeClient";

const secretKey = process.env.ONSHAPE_SECRET_KEY
const accessKey = process.env.ONSHAPE_ACCESS_KEY

const config = new Configuration({
    middleware: [
        APIKeyAuthMiddleware(secretKey, accessKey)
    ]
});

// API Classes for each tag section in the Onshape API https://cad.onshape.com/glassworks/explorer/#/

// For small bundle sizes, only include the api classes you use
let dapi = new DocumentApi(config)

const docVersions = await dapi.getDocumentVersions({did: "da2bc7f409791a8720b27217"})
console.log(docVersions);

// For convient access
const client = new OnshapeClient(config);

const docVersions2 = await client.DocumentApi.getDocumentVersions({did: "da2bc7f409791a8720b27217"});
console.log(docVersions2);
```