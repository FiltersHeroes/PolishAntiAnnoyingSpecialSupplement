#!/bin/bash

# Sciezka to miejsce, w którym znajduje się skrypt
sciezka=$(dirname "$0")

cd $sciezka/..

if [ "$CI" = "true" ] ; then
    git config --global user.email "PolishJarvis@int.pl"
    git config --global user.name "PolishJarvis"
    ost_plik=$(git diff-tree --no-commit-id --name-only -r master)
else
    ost_plik=$(git diff -z --name-only | xargs -0)
fi


if [[ "$ost_plik" == "polish_rss_filters"* ]]; then
    if [[ "$lista" != *" polish_rss_filters.txt"* ]] ;then
        lista+=" "polish_rss_filters.txt
    fi
fi

if [ "$lista" ] ; then
    $sciezka/VICHS.sh $lista
fi
