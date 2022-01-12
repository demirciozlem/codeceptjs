const {I} = inject();
Given('I navigate to application', () => {
    I.amOnPage('/');
});

When('I enter more than 30 characters', () => {
    I.fillField('todo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
    I.click('Add')
})


Then('I see "Todo must be a maximum of 30 characters"', () => {
    I.see('Todo must be a maximum of 30 characters')
})
