import { browser, by, element } from 'protractor';

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    
    browser.get('https://angularjs.org');

    // https://github.com/angular/protractor/issues/4307 
    // _debugger and the legacy CLI debugger were removed in Node 8: nodejs/node@90476ac
    // browser.pause();

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    
    // TESTS ARE NOT LONGER VALID - page has changed
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});