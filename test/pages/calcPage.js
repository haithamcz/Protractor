'use strict';
// Page object class for the calculator app

var calcPage = function () {
browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
};

 calcPage.prototype = Object.create({}, {
    firstTxt: { get: function () { return element(by.model('first')); }},
    secondTxt: { get: function () { return element(by.model('second')); }},
    goBtn: { get: function () { return  element(by.id('gobutton')); }},
    result: { get: function () { return element(by.css('div>form>h2')); }},
    insertFirst: { value: function (value) { return this.firstTxt.sendKeys(value); }},
    insertSecond: { value: function (value) { return this.secondTxt.sendKeys(value); }},
    go: { value: function () { return this.goBtn.click(); }},
});

module.exports = calcPage;

