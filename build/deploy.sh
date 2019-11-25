#!/usr/bin/env sh

set -e

#npm run build

cd dist

git init
git config user.name 'cinyearchan'
git config user.email 'cinyearchan@gmail.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:cinyearchan/ts-axios.git master:gh-pages

cd -