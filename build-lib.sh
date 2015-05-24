#!/bin/sh

tempDir=".build"

rm -rf ${tempDir}
mkdir -p ${tempDir}
cd ${tempDir}
git clone https://github.com/vitmalina/w2ui
cd w2ui
rm -rf ../../lib/*
cp  ./dist/*min*.* ../../lib/
cd -
cd -
