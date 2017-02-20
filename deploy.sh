#!/bin/sh
BRANCH=`date +%Y.%m%d.%H%M%S`
npm run build
git commit -am v$BRANCH
git push origin source
mkdir ~/SALT_UI_BUILD
mv ./build/* ~/SALT_UI_BUILD/
git checkout master
cp -rf ~/SALT_UI_BUILD/* .
rm -rf ~/SALT_UI_BUILD
git add .
git commit -m v$BRANCH
git push origin master
git checkout source
