#!/bin/bash

while getopts c:s:p:v flag
do
    case "${flag}" in
        c) command=${OPTARG};;
        s) stage=${OPTARG};;
        p) port=${OPTARG};;
        v) verboseCommand="--verbose"
    esac
done

ROOT=$PWD

if [ -z "$stage" ]; then
    stage=dev
fi

additionalArgs=''

if [[ "${command}" == 'remove' ]];
then
  echo 'removing...'
elif [[ "${command}" != 'offline' ]]; then
  folder=${PWD##*/}
  echo "Building $folder..." && npm run build:layer
  cd dist && ls -I $folder | xargs rm -rf && rm -rf $folder/src
fi

if [ ! -z "$port" ]; then
  lambdaPort=$(echo ${port} | sed 's/\([0-9]\{2\}\).$/1\1/g')
  additionalArgs=" --httpPort=${port} --lambdaPort=${lambdaPort}"
fi

echo "sls $command --stage $stage $additionalArgs"

cd $ROOT && sls $command --stage $stage $verboseCommand $additionalArgs
