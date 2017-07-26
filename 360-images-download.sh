#!/bin/bash
# Run this bash script to pull 360 images into the project to develop with.

IMAGES="../../../360-images"
CLIENT=""

mkdir app/public/360-photos/
cd app/public/360-photos/

cat $IMAGES | while read line
do
    if [[ $line == *"#"* ]]
    then
        if [[ $CLIENT == "" ]]
        then
            mkdir "${line//#}"
            cd "${line//#}"
        else
            mkdir "../${line//#}"
            cd "../${line//#}"
        fi
        CLIENT="${line//#}"
    else
        curl -O $line
    fi
done