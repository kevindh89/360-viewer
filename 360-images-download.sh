#!/bin/bash
# Run this bash script to pull 360 images into the project to develop with.

IMAGES="../../../360-images"

mkdir app/public/360-viewer/
cd app/public/360-viewer/

for img in `cat $IMAGES`; do
   curl -O $img

done