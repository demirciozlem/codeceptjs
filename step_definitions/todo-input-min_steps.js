const {I} = inject();
// Add in your custom step files

Given('I navigate to application', () => {
    I.amOnPage('/');
});

When('I enter less than 6 characters', () => {
    I.fillField('todo', 'buy')
    I.click('Add')
})


Then('I see "Todo must be at least 6 characters"', () => {
    I.see('Todo must be at least 6 characters')
})

// Then('I fill todo input', () => {
//     I.fillField('todo','Drink Water')
// })
