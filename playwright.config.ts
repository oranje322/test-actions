// const RPconfig = {
//   'token': '43e78d0e-6b2c-4f03-b5de-0263c4a3d970',
//   'endpoint': 'http://alpha.reportportal.io/api/v1',
//   'project': 'oranje322_personal',
//   'launch': 'Playwright test',
//   'description': 'UI tests processed by Playwright',
//   'attributes': [
//     {
//       'key': 'RP_LAUNCH',
//       'value': 'TEST-UI tests',
//     },
//   ],
//   includeTestSteps: true,
//   debug: false,
// };

const config = {
  "use": {
    "baseURL": "https://playwright.dev/",
    "headless": true,
    "ignoreHTTPSErrors": true,
    "actionTimeout": 10000,
    "navigationTimeout": 10000,
    "screenshot": "only-on-failure",
    "trace": "on-first-retry"
  },
  "expect": {
    "timeout": 5000
  },
  "timeout": 30000,
  "forbidOnly": false,
  "retries": 0,
  "reporter": [
    [
      "list"
    ],
    [
      "@reportportal/agent-js-playwright",
      {
        "token": "43e78d0e-6b2c-4f03-b5de-0263c4a3d970",
        "endpoint": "http://alpha.reportportal.io/api/v1",
        "project": "oranje322_personal",
        "launch": "Playwright Tests",
        "description": "Integration Tests written with Playwright",
        "includeTestSteps": true,
        "debug": false
      }
    ]
  ],
  "projects": [
    {
      "name": "chromium",
      "use": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.15 Safari/537.36",
        "screen": {
          "width": 1920,
          "height": 1080
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 1,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "chromium"
      }
    },
    {
      "name": "firefox",
      "use": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0.2) Gecko/20100101 Firefox/98.0.2",
        "screen": {
          "width": 1920,
          "height": 1080
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 1,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "firefox"
      }
    }
  ],
}

module.exports = config;
