#!/bin/bash

# Start in tasks even if run from root directory
cd "$(dirname "$0")"

# Exit the script on any command with non 0 return code
# We assume that all the commands in the pipeline set their return code
# properly and that we do not need to validate that the output is correct
set -e

# Echo every command being executed
set -x

# Go to root
cd ..
root_path=$PWD

PATH_PREFIX='/carbon-website' bash ./tasks/build.sh --env internal

mkdir tmp
mv public/CNAME tmp/CNAME

$(yarn bin)/gh-pages -d public

mv tmp/CNAME public/CNAME
rm -rf tmp
