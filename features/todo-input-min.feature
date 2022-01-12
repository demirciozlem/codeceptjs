Feature:Todo must be at least 6 characters

  Scenario: Todo must be at least 6 characters
    Given I navigate to application
    When I enter less than 6 characters
    Then I see "Todo must be at least 6 characters"
