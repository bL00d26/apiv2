#!/bin/bash
ROOT=$(pwd)

while getopts c:s:e:v flag
do
    case "${flag}" in
        c) command=${OPTARG};;
        s) stage=${OPTARG};;
        e) stacks+="${OPTARG} ";;
        v) verboseCommand='-v'
    esac
done

possibleCommands=["deploy package remove offline"]

if [ -z $command ] || [[ ! ${possibleCommands[@]} =~ $command ]]; then
    echo 'Bad command (-c) specified'
    exit 0
fi


if [ -z "$stage" ]; then
    stage=dev
fi

excludes="slsCommand.sh serverless.common.yml serverless-compose.yml readme.md package.json package-lock.json node_modules layers bootstrap.sh"
lsCommand="ls "
for layer in $excludes
do
  lsCommand=${lsCommand:+$lsCommand }"-I $layer"
done

if [ -z "$stacks" ]; then
  toDeployStack=$(exec $lsCommand)
else
  toDeployStack=$stacks
fi

echo $command: ${toDeployStack[@]}

counter='0'
if [[ $command = 'offline' ]]; then
  for stack in $toDeployStack
    do
        cd $ROOT
        if grep -q "serverless-offline" $stack/serverless.yml
        then
          let counterPort="300${counter}"
          cd $stack && (exec ./slsCommand.sh -c $command -s $stage -p $counterPort $verboseCommand) &
          pid[$counter]=$!
          let counter=counter+1
        fi
    done
  trap "kill ${pid[0]} ${pid[1]}; exit 1" INT
  wait
else
  if [[ $command = 'deploy' ]] && [ -z "$stacks" ]; then
    echo "Packing before deploying..."
    deploy=true
    command='package'
  fi
  if [ -z "$stacks" ]; then
    echo "$command layer"
    cd layers && (exec ./slsCommand.sh -c $command -s $stage) && cd $ROOT
  fi

  for stack in $toDeployStack
  do
    cd $stack && (exec ./slsCommand.sh -c $command -s $stage) && cd $ROOT
  done

  if [[ ! -z "$deploy" ]] && [ -z "$stacks" ]; then
    echo Deploying after packing...
    sls deploy -s $stage
  fi
fi