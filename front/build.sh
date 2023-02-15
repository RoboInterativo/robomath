#!/bin/bash
rm -rf build
rm -rf ../back/templates/build
rm -rf ../back/static
npm run build
cp -r build ../back/templates
cp -r build/static ../back
