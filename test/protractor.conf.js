exports.config = {

    capabilities: {
        browserName: 'firefox'
    },

    // chromeOnly: true,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: process.env.WEBCLIENT_URL,

    onPrepare: function() {
        // browser.manage().window().setPosition(0, 0)
        // browser.manage().window().maximize()
    },

    jasmineNodeOpts: {
        showColors: true,
        realtimeFailure: true,
        defaultTimeoutInterval: 30000
    },

    specs: [
      'e2e/*.js'
    ]

}
