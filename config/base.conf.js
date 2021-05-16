module.exports = {
    specs: [
        './test/specs/**/*.js'
        './test/specs/navigation.spec.js'
    ],
    exclude: [
        //'./test/specs/navigation.spec.js',

    ],
    logLevel: 'info',
    bail: 1,

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    baseUrl: 'https://stage.localcoding.us',

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true
    }]],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    }
}
