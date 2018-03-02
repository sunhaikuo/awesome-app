var fs = require('fs-extra')
var path = require('path')
var src = path.resolve(__dirname, './dist/index.js')
var dist = '/Users/Mtime/web/weex-admin/dist/user.js'
fs.copySync(src, dist)
