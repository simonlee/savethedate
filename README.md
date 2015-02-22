# How to deploy

use pm2

1. run `bower install`
2. cd backend/
3. run `npm install`
4. cd ..
5. cp launch.sh.template launch.sh
6. edit launch.sh and fill in the variables and run it: `sh launch.sh`

backend/bin/wwws is hardcoded with a http(80) to https(443) redirect
