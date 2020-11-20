module.exports = {
    'Main page is showing' : function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body')
            .assert.visible('body')
            .end();
    }
};
