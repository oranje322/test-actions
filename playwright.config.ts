const RPconfig = {
  'token': '43e78d0e-6b2c-4f03-b5de-0263c4a3d970',
  'endpoint': 'http://alpha.reportportal.io/api/v1',
  'project': 'oranje322_personal',
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
