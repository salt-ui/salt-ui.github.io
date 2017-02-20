#!/bin/sh
BRANCH=`date +%Y.%m%d.%H%M%S`
npm run build
git commit -am v$BRANCH
git push origin source
rm -rf ~/.salt
mv build/* ~/.salt
git checkout master
cp -rf ~/.salt/* .
# git add .
# git commit -m v$BRANCH
# git push origin master
# git checkout source

