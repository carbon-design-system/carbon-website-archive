#!/bin/bash

function print_help {
  echo "Usage: ${0} [OPTIONS]"
  echo ""
  echo "OPTIONS:"
  echo "  --env <environment>  the environment for gatsby to target for builds"
  echo "  --help                    print this message and exit"
  echo ""
}

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

# Parse our CLI arguments, most notably --env
while [ "$1" != "" ]; do
  case $1 in
    "--env")
      shift
      BUILD_ENV=$1
      ;;
    "--help")
      print_help
      exit 0
      ;;
  esac
  shift
done

# We want to verify that --env was passed in and supplied a value.
# If not, exit early and print our help instructions
if [ "$BUILD_ENV" == "" ]
then
  echo "--env flag is required for ${0} to run"
  print_help
  exit 1
fi

# Remove the .cache directory to prevent any weirdness
rm -rf .cache

# Switch on the BUILD_ENV to target all of our supported build environments
case ${BUILD_ENV} in
  "external")
    GATSBY_CARBON_ENV=$BUILD_ENV $(yarn bin)/gatsby build --prefix-paths
    ;;
  "internal")
    GATSBY_CARBON_ENV=$BUILD_ENV PATH_PREFIX='/design/product' $(yarn bin)/gatsby build --prefix-paths

    # Temporary hack for our Staticfile deployments. We need to support
    # /design/product for our internal deployment. As a result, we need the
    # files hosted at public/design/product so that nginx will serve the files
    # when the /design/product route is hit
    rm -rf public/design
    cp -R public tmp
    mkdir -p public/design
    mv tmp public/design/product
    ;;
  *)
    echo "The build environment \`${BUILD_ENV}\` is unsupported."
    exit 1
    ;;
esac
