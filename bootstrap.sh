#!/bin/bash

ROOT=$(pwd)

YELLOW="\e[33m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"

if [[ $1 = init ]]; then
  echo -e "${YELLOW} Installing base dependencies...${ENDCOLOR}"
  npm i
  cd layers/src
  echo -e "${GREEN}${layer} base dependencies installed!${ENDCOLOR}"


  for layer in $(ls .)
    do
      cd $layer
      echo -e "${YELLOW}Installing ${layer} layer dependencies...${ENDCOLOR}"
      cd $PWD
      npm run dev:install
      echo -e "${GREEN}${layer} layer dependencies installed!${ENDCOLOR}"
      echo ''
      cd ./..
    done
else
  echo '... any command executed ¯\_(ツ)_/¯'
fi
