#!/bin/sh

# git binary location (use global git by default)
GIT_BIN_CMD=git

# npm binary location (use global npm by default)
NPM_BIN_CMD=npm

# userscript metadata location
USERSCRIPT_META_LOCATION='maxurl/userscript.meta.js'

# userscript source location
USERSCRIPT_SRC_LOCATION='maxurl/src/userscript.ts'

# new userscript updateURL (make sure it's sed-compliant)
USERSCRIPT_UPDATE_URL="https:\/\/raw.githubusercontent.com\/F640\/qsniyg-maxurl\/dist\/maxurl.meta.js"
USERSCRIPT_MIN_UPDATE_URL="https:\/\/raw.githubusercontent.com\/F640\/qsniyg-maxurl\/dist\/maxurl_min.meta.js"

# new userscript downloadURL (make sure it's sed-compliant)
USERSCRIPT_DOWNLOAD_URL="https:\/\/raw.githubusercontent.com\/F640\/qsniyg-maxurl\/dist\/maxurl.user.js"
USERSCRIPT_MIN_DOWNLOAD_URL="https:\/\/raw.githubusercontent.com\/F640\/qsniyg-maxurl\/dist\/maxurl_min.user.js"

# check for git existence
if ! command -v $GIT_BIN_CMD >/dev/null 2>&1
then
    echo "cannot find git"
    exit 1
fi

# check for npm existence
if ! command -v $NPM_BIN_CMD >/dev/null 2>&1
then
    echo "cannot find npm"
    exit 1
fi

# start cloning repo
$GIT_BIN_CMD clone --depth 1 "https://github.com/qsniyg/maxurl.git"

cd maxurl
REPO_COMMIT=$($GIT_BIN_CMD rev-parse HEAD)
REPO_SHORT_COMMIT=$($GIT_BIN_CMD rev-parse --short HEAD)
echo "creating script version commit $REPO_COMMIT"
cd ..

# check userscript meta file existence
if [ ! -f $USERSCRIPT_META_LOCATION ]; then
    echo "userscript meta not found. aborting..."
    exit 1
fi

# also its raw source
if [ ! -f $USERSCRIPT_SRC_LOCATION ]; then
    echo "userscript source code not found. aborting..."
    exit 1
fi

# make temp directory so it won't be messy
mkdir tempo2123

# change userscript name
echo 'changing script name...'
sed -E "s/(\/\/([[:space:]]+)?@name:?([a-z,A-Z]{2}(-[a-z,A-Z]{2})?)?([[:space:]]+))(.+)/\1Image Max URL (unofficial dev version)/gm" $USERSCRIPT_META_LOCATION > tempo2123/userscript1.meta.js
sed -E "s/(\/\/([[:space:]]+)?@name:?([a-z,A-Z]{2}(-[a-z,A-Z]{2})?)?([[:space:]]+))(.+)/\1Image Max URL (unofficial dev version)/gm" $USERSCRIPT_SRC_LOCATION > tempo2123/userscript1.ts

# change userscript version
echo 'changing script version...'
sed -E "s/(\/\/([[:space:]]+)?@version([[:space:]]+))(.+)/\1main-$REPO_SHORT_COMMIT/gm" tempo2123/userscript1.meta.js > tempo2123/userscript2.meta.js
sed -E "s/(\/\/([[:space:]]+)?@version([[:space:]]+))(.+)/\1main-$REPO_SHORT_COMMIT/gm" tempo2123/userscript1.ts > tempo2123/userscript2.ts

# change userscript updater stuff
echo 'changing script update metadata...'
sed -E "s/(\/\/([[:space:]]+)?@updateURL([[:space:]]+))(.+)/\1$USERSCRIPT_UPDATE_URL/gm" tempo2123/userscript2.meta.js > tempo2123/userscript3.meta.js
sed -E "s/(\/\/([[:space:]]+)?@updateURL([[:space:]]+))(.+)/\1$USERSCRIPT_UPDATE_URL/gm" tempo2123/userscript2.ts > tempo2123/userscript3.ts
sed -E "s/(\/\/([[:space:]]+)?@downloadURL([[:space:]]+))(.+)/\1$USERSCRIPT_DOWNLOAD_URL/gm" tempo2123/userscript3.meta.js > tempo2123/userscript4.meta.js
sed -E "s/(\/\/([[:space:]]+)?@downloadURL([[:space:]]+))(.+)/\1$USERSCRIPT_DOWNLOAD_URL/gm" tempo2123/userscript3.ts > tempo2123/userscript4.ts

# nullify updater thingy (very dirty tho since it's inside source code)
echo 'dirty-patching update url (to disable it)...'
sed -E "s/https:\/\/api\.github\.com\/repos\/qsniyg\/maxurl\/tags/https:\/\/notavirus/gm" tempo2123/userscript4.ts > tempo2123/userscript5.ts
echo 'dirty-patching remaining update links to original ones...'
sed -E "s/https:\/\/raw.githubusercontent.com\/qsniyg\/maxurl\/master\/userscript_smaller.user.js/$USERSCRIPT_DOWNLOAD_URL/gm" tempo2123/userscript5.ts > tempo2123/userscript6.ts

# return changes to original repo
cp tempo2123/userscript6.ts $USERSCRIPT_SRC_LOCATION
cp tempo2123/userscript4.meta.js $USERSCRIPT_META_LOCATION

# setup npm for build
cd maxurl
npm install
cd ..

# remove built files to make sure nothing wrong happens
rm -f maxurl/build/tsout.js

# now start build the script
cd maxurl
npm run build
if [ $? -ne 0 ]; then
  echo "failed to build script. something went wrong?"
  exit 1
fi
cd ..

# edit minified-specific updater things
sed -E "s/(\/\/([[:space:]]+)?@updateURL([[:space:]]+))(.+)/\1$USERSCRIPT_MIN_UPDATE_URL/gm" $USERSCRIPT_META_LOCATION > tempo2123/userscript_smol1.meta.js
sed -E "s/(\/\/([[:space:]]+)?@updateURL([[:space:]]+))(.+)/\1$USERSCRIPT_MIN_UPDATE_URL/gm" maxurl/userscript_smaller.user.js > tempo2123/userscript_smol1.user.js
sed -E "s/(\/\/([[:space:]]+)?@downloadURL([[:space:]]+))(.+)/\1$USERSCRIPT_MIN_DOWNLOAD_URL/gm" tempo2123/userscript_smol1.meta.js > tempo2123/userscript_smol2.meta.js
sed -E "s/(\/\/([[:space:]]+)?@downloadURL([[:space:]]+))(.+)/\1$USERSCRIPT_MIN_DOWNLOAD_URL/gm" tempo2123/userscript_smol1.user.js > tempo2123/userscript_smol2.user.js

# take out the scripts
# unminified script
cp maxurl/userscript.user.js maxurl.user.js
# minified one
cp tempo2123/userscript_smol2.user.js maxurl_min.user.js
# metadata for unminified one
cp maxurl/userscript.meta.js maxurl.meta.js
# metadata for minified one
cp tempo2123/userscript_smol2.meta.js maxurl_min.meta.js
