#!/bin/bash
BRANCH=`date +%Y.%m%d.%H%M%S`
SALTUI=`tnpm view saltui version`
npm run build
git add .
git commit -m v$BRANCH
git push origin source-blue
mkdir ~/SALT_UI_BUILD
mv ./build/* ~/SALT_UI_BUILD/
git checkout master
git pull origin master
cp -rf ~/SALT_UI_BUILD/* .
cp -rf ~/SALT_UI_BUILD/index.css ./blue.css
rm -rf ~/SALT_UI_BUILD
git add .
git commit -m v$BRANCH
git push origin master
git tag v$SALTUI
git push origin v$SALTUI
git checkout source-blue
