#!/usr/bin/env node
// chmod 755 bin/pages-gulp-boilerplate.js

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))
console.log(process.argv);

require('gulp/bin/gulp')
