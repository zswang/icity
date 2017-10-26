/*jshint globalstrict: true*/
/*global require*/

'use strict'

const gulp = require('gulp')
const util = require('util')
const jdists = require('gulp-jdists')
const rename = require('gulp-rename')
const examplejs = require('gulp-examplejs')
const typescript = require('gulp-typescript')
const replace = require('gulp-replace')
const merge2 = require('merge2')
const pkg = require('./package')

gulp.task('build', function () {
  var tsResult = gulp.src('src/*.ts')
    .pipe(jdists())
    .pipe(gulp.dest('lib'))
    .pipe(typescript({
      target: 'ES5',
      declaration: true,
      module: 'umd',
    }))

  return merge2([
    tsResult.dts.pipe(gulp.dest('lib')),
    tsResult.js
      .pipe(replace(
        /(\(function\s*\()(factory\)\s*\{)/, '$1root, $2\n    /* istanbul ignore next */'
      ))
      .pipe(replace(
        /(define\(\["require",\s*"exports"\],\s*factory\);\s*\})/, '$1 else { factory(null, root["' + pkg.name + '"] = {}); }'
      ))
      .pipe(replace(
        /(\s*\}\s*\)\s*\()(function\s*\(require,\s*exports\)\s*\{)/, '$1this, $2'
      ))
      .pipe(gulp.dest('lib'))
  ])
})

gulp.task('example', function () {
  return gulp.src([
    `src/${pkg.name}.ts`
  ])
    .pipe(examplejs({
      header: `
global.${pkg.name} = require('../')
      `
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('test'))
})

gulp.task('dist', ['build', 'example'])