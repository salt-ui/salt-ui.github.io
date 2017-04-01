#!/bin/bash
echo "Start to copy..."
cd node_modules/@ali
rsync -R tingle-*/README.md tingle-*/HISTORY.md tingle-*/package.json ../../components
cd ../../
for file in components/tingle-*/README.md; do mv -f "$file" "${file/README/index}"; done
echo "Copy finished."
