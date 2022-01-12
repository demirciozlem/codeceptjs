Feature:Todo must be a maximum of 30 characters

  Scenario: Todo must be a maximum of 30 characters
    Given I navigate to application
    When I enter more than 30 characters
    Then I see "Todo must be a maximum of 30 characters"
