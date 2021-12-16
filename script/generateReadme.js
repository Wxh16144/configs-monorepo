/* eslint-disable import/order */
const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const template = require('art-template')

const PACKAGE_DIR = path.resolve(__dirname, '../packages')
const README_TEMPLATE = path.join(__dirname, './README.md.art')

const packageList = glob
  .sync(path.resolve(PACKAGE_DIR, './*/package.json'))
  .map(pkgPath => fs.readJsonSync(pkgPath))

const README = template(README_TEMPLATE, { list: packageList })

fs.writeFileSync(path.join(__dirname, '../README.md'), README, 'utf-8')

// eslint-disable-next-line no-console
console.log('README.md generation successfully')
