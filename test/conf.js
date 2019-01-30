var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
framework: 'jasmine',
capabilities: {
browserName: 'chrome'
},
noGlobals: false,
jasmineNodeOpts: {
    defaultTimeoutInterval: 105000
},
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
       //
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
           savePath: '../Report/HTML/'
           //...
        }));
     }
};