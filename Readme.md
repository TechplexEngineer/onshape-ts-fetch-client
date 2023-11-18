Onshape Typescript Fetch client
===============================

# WARNING: Unmaintained

The openapi generator typescript-fetch generates code that does not compile.
Recomment alternate approach such as: https://github.com/drwpow/openapi-typescript

REST Api client for Onshape generated from Openapi spec https://cad.onshape.com/api/openapi using the typescript-fetch generator.

See src/example.test.ts for a working example.
```typescript
import 'dotenv/config'


import {
    Configuration, APIKeyAuthMiddleware, DocumentApi, OnshapeClient
} from 'onshape-ts-fetch-client'

const secretKey = process.env.ONSHAPE_SECRET_KEY
const accessKey = process.env.ONSHAPE_ACCESS_KEY


const config = new Configuration({
    middleware: [
        APIKeyAuthMiddleware(secretKey, accessKey)
    ]
});

const did = "f00ba40ee71d7a9324b5af07"

// Option 1: accessing the api's individually
const docApi = new DocumentApi(config)

const docVersions = await docApi.getDocumentVersions({did})

// Option 2: Using the api client instance
const client = new OnshapeClient(config);
const docVersions2 = await client.DocumentApi.getDocumentVersions({did});


```
