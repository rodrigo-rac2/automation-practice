const chromedriver = require('chromedriver')

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  // src_folders: ['tests/linear'],
  // src_folders: ['tests/POM'],
  src_folders: ['tests/POM-business'],

  // page_objects_path: './pages-POM',
  // page_objects_path: './pages-linear',
  page_objects_path: './pages-business',

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 9515
  },

  test_settings: {
    default: {
      globals: {
        waitForConditionsTimeout: 15000
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}