const {I} = inject();
const todo = "brush teeth"

Given('I navigate to application', () => {
    I.amOnPage('/');
});

When('Enter todo', () => {
    I.fillField('todo', todo)
    I.click('Add')
})


Then('I see the new todo on my list', () => {
    I.see(todo,'h5')
})
