/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
/* eslint-disable no-console */

import fs from 'fs';
import rimraf from 'rimraf';
import { join } from 'path';

import { TestConfig, Repo } from '../../model/test_config';
import { prepareProjectByCloning } from '../test_utils';
import { ServerOptions } from '../server_options';

export class TestRepoManager {
  private repos: Repo[];
  private readonly serverOptions: ServerOptions;

  constructor(testConfig: TestConfig, serverOptions: ServerOptions) {
    this.repos = testConfig.repos;
    this.serverOptions = serverOptions;
  }

  public async importAllRepos() {
    for (const repo of this.repos) {
      await prepareProjectByCloning(repo.url, join(this.serverOptions.repoPath, repo.uri));
    }
  }

  public async cleanAllRepos() {
    this.repos.forEach(repo => {
      this.cleanRepo(join(this.serverOptions.repoPath, repo.uri));
    });
  }

  public async cleanRepo(path: string) {
    return new Promise(resolve => {
      if (fs.existsSync(path)) {
        rimraf(path, resolve);
      } else {
        resolve(true);
      }
    });
  }

  public getRepo(language: string): Repo {
    return this.repos.filter(repo => {
      return repo.language === language;
    })[0];
  }
}
