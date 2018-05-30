/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { TUTORIAL_CATEGORY } from '../../../common/tutorials/tutorial_category';
import { ON_PREM_INSTRUCTIONS } from './on_prem';
import { ELASTIC_CLOUD_INSTRUCTIONS } from './elastic_cloud';
import { ON_PREM_ELASTIC_CLOUD_INSTRUCTIONS } from './on_prem_elastic_cloud';

export function nginxMetricsSpecProvider() {
  return {
    id: 'nginxMetrics',
    name: 'Nginx metrics',
    category: TUTORIAL_CATEGORY.METRICS,
    shortDescription: 'Fetch internal metrics from the Nginx HTTP server.',
    longDescription: 'The `nginx` Metricbeat module fetches internal metrics from the Nginx HTTP server.' +
                     ' The module scrapes the server status data from the web page generated by the' +
                     ' [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html),' +
                     '  which must be enabled in your Nginx installation.' +
                     ' [Learn more]({config.docs.beats.metricbeat}/metricbeat-module-nginx.html).',
    euiIconType: 'logoNginx',
    artifacts: {
      dashboards: [
        {
          id: '023d2930-f1a5-11e7-a9ef-93c69af7b129',
          linkLabel: 'Nginx metrics dashboard',
          isOverview: true
        }
      ],
      exportedFields: {
        documentationUrl: '{config.docs.beats.metricbeat}/exported-fields-nginx.html'
      }
    },
    completionTimeMinutes: 10,
    previewImagePath: '/plugins/kibana/home/tutorial_resources/nginx_metrics/screenshot.png',
    onPrem: ON_PREM_INSTRUCTIONS,
    elasticCloud: ELASTIC_CLOUD_INSTRUCTIONS,
    onPremElasticCloud: ON_PREM_ELASTIC_CLOUD_INSTRUCTIONS
  };
}
