exports.config = {

    runner: 'local',

    specs: [
        './testscripts/specs/trello.spec.ts'
    ],

    capabilities: [{
        browserName: 'chrome',
        'chromeOptions': {'w3c': false},
        "chromedriverExecutable" : "K:/wdioanywhere/chromedriver_win32/chromedriver.exe"
}],

    logLevel: 'info',
    services: ['chromedriver'],
    reporters: ['spec'],
    bail: 0,
    baseUrl: 'http://localhost',
    path: '/wd/hub',
    waitforTimeout: 300000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    port: 4723,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
        requires: ['ts-node-register'],
    },

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
        tsConfigPathsOpts: {
            baseUrl: './'
        }
    },

}

