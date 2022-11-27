const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    Playwright: {
      url: 'https://wpjobs.sitesopta.com.br/',
      show: true,
      trace: true,
      video: true,
      browser: 'chromium',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--win down-size=1920,1200"]
        }
      }
    }
  },
  plugins: {
    screenshotOnFail: {
        enabled: true
    }      
},
 bootstrap: './server/server.js',
 teardown: './server/server.js',
  include: {
    "I": "./steps_file.js",
    "home_page": "./pages/home_page.js",
    "login_page": "./pages/login_page.js",
    "register_page": "./pages/register_page.js"
  },
  name: 'automacao-codeceptjs-web'
}