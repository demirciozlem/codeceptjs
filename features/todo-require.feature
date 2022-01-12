Feature:todo input is required

  Scenario: todo input is required
    Given I navigate to application
    When I enter add button
    Then I see "Todo is required"



