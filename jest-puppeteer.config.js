// jest-puppeteer.config.js

module.exports = {
    launch: {
        headless: process.env.HEADLESS !== 'false',
        product: 'chrome',
        args: [
            '--window-size=200,200',
        ],
        defaultViewport: null,
    },
    browserContext: 'default',
}
