#!/bin/sh
BRANCH=`date +%Y.%m%d.%H%M%S`
npm run build
git commit -am v$BRANCH
git push origin source
# cp -R build ~/.salt
# git checkout master
# cp -R ~/.salt/build/* ./ 
# rm -rf ~/.salt/
# git commit -m v$BRANCH
# git push origin master
# git checkout source

