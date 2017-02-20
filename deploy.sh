#!/bin/sh
BRANCH=`date +%Y.%m%d.%H%M%S`
npm run build
git commit -am v$BRANCH
git push origin source
mv build ~/.salt
git checkout master
rm -rf *
mv ~/.salt/* .
# git add .
# git commit -m v$BRANCH
# git push origin master
# git checkout source

