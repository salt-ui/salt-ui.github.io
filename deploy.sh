#!/bin/bash
BRANCH=`date +%Y.%m%d.%H%M%S`
npm run build
git add .
git commit -m v$BRANCH
git push origin source
mkdir ~/SALT_UI_BUILD
mv ./build/* ~/SALT_UI_BUILD/
git checkout master
git pull origin master
cp -rf ~/SALT_UI_BUILD/* .
rm -rf ~/SALT_UI_BUILD
git add .
git commit -m v$BRANCH
git push origin master
git tag v$BRANCH
git push origin v$BRANCH
git checkout source
