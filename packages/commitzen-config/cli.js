#!/usr/bin/env node
'use strict'

const cp = require('child_process')
const path = require('path')

const isGitRepository = (cwd) => {
  const { status, stdout } = cp.spawnSync('git', ['rev-parse', '--is-inside-work-tree'], { cwd })
  return status !== 0 ? false : !!stdout
}

if (!isGitRepository(process.cwd()))
  throw new Error('fatal: not a git repository (or any of the parent directories): .git')

const { bootstrap } = require('commitizen/dist/cli/git-cz')
const cliPath = require.resolve('commitizen')
bootstrap({
  cliPath: path.resolve(cliPath, '../../'),
  config: {
    path: require.resolve('cz-customizable'),
  },
})
