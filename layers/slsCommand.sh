#!/bin/bash
ROOT=$(pwd)

while getopts c:e:s: flag
do
    case "${flag}" in
        c) command=${OPTARG};;
        s) stage=${OPTARG};;
    esac
done

if [[ "${command}" == 'remove' ]];
then
  echo 'removing...'
else

  for layer in $(ls ./src)
  do
    echo "Building ${layer}..."
    cd src/$layer && npm run build && cd $ROOT && cd dist/$layer && npm i --production && cd $ROOT
  done
fi

sls $command --stage $stage
