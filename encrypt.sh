#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Go to https://github.com/settings/applications#personal-access-tokens to get the token needed and pass it in here."
  echo "The result of this script must be pasted in .travis.yml behind 'secure: '"
  exit
fi

travis encrypt -r tddbin/es6katas.org GH_TOKEN=$1 --add

# 1ecf8649ee7c45ccbc37fb6332db589463d52c5d