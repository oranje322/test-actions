const RPconfig = {
  'token': 'f3735240-1b3e-4054-b638-3fd873e1f597',
  'endpoint': 'http://qa.reportportal.io/api/v1',
  'project': 'Aleksandr',
  'launch': 'Playwright test',
  'description': 'UI tests processed by Playwright',
  'attributes': [
    {
      'key': 'RP_LAUNCH',
      'value': 'TEST-UI tests',
    },
  ],
  includeTestSteps: true,
  debug: false,
};

const config = {
  reporter: [['line'], ['@reportportal/agent-js-playwright', RPconfig]],
  projects: [
    {
      name: 'default',
      testIgnore: ['retriesTest.spec.ts', 'basicTest.spec.ts'],
    },
    {
      name: 'withAttachments',
      testMatch: /basicTest.spec.ts/,
      use: {
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",
      },
    },
    {
      name: 'withoutAttachments',
      testMatch: /basicTest.spec.ts/,
    },
    {
      name: 'retried',
      testMatch: /retriesTest.spec.ts/,
      retries: 2,
    },
  ],
};

module.exports = config;
