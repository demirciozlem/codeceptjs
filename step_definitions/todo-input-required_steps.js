const {I} = inject();
// Add in your custom step files

Given('I navigate to application', () => {
    I.amOnPage('/');
});

When('I enter add button', () => {
    I.click('Add')
})


Then('I see "Todo is required"', () => {
    I.see('Todo is required')
})


