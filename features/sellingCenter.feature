Feature: React | Celling Center page

    Scenario: Log in to manheim and navigate to selling center page

    Given The page url i sign in to manheim.man-uat.com
    When enter user michaels and password demo
    And I signin i navigate to Selling Center page
    Then i verify my page title to be "Overview"
