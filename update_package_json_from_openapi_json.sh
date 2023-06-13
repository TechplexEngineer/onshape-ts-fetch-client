#!/bin/bash

set -euo pipefail

newVersion=$(jq -r ".info.version" openapi.json)

contents=$(jq ".version = \"$newVersion\"" package.json) && echo -E "${contents}" > package.json