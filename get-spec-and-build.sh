#!/bin/bash

set -euo pipefail

curl -o openapi.json https://cad.onshape.com/api/openapi

rm -rf src/generated-sources/openapi

npx @openapitools/openapi-generator-cli generate \
	-i ./openapi.json \
	-o onshape_api \
	-g typescript-fetch \
	--additional-properties=supportsES6=true,npmVersion=6.9.0,typescriptThreePlus=true