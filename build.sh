#!/bin/bash

npm run build
rm -r _next 404.html index.html
mv out/* .
