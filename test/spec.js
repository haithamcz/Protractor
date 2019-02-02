var calcPage = require('../pages/calcPage.js');

describe('Protactor js tests for calculator angularjs app', function() {
   var page;
    beforeEach(function () {
     page = new calcPage();

browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    });
  it('should add two numbers', function() {
    page.insertFirst('4');
    page.insertSecond('4');
    page.go();
    expect(page.result.getText()).toBe('8');
  });

it('should divide two numbers', function(){

   // change operator
    var select = element(by.model('operator'));
    select.$('[value="DIVISION"]').click();
    page.insertFirst('8');
    page.insertSecond('2');
    page.go();
    expect(page.result.getText()).toBe('4');
  });
});
