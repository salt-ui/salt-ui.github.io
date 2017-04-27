#!/bin/bash
echo "Copy documents..."
cd node_modules/@ali
rsync -R tingle-*/README.md tingle-*/HISTORY.md tingle-*/package.json ../../components
cd ../../
for file in components/tingle-*/README.md; do mv -f "$file" "${file/README/index}"; done
rm -f components/tingle-ui/index.md
echo "Update tingle-ui version..."
TINGLE=`tnpm view @ali/tingle-ui version`
OS=`uname`
if [[ "$OS" == "Darwin" ]]; then
  sed -i "" "s/tingle-ui\/[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*/tingle-ui\/$TINGLE/g" template.mobile.html
else
  sed -i "s/tingle-ui\/[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*/tingle-ui\/$TINGLE/g" template.mobile.html
fi
