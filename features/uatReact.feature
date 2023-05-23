Feature: React | All my inventory page

    Scenario: Read the page header

    Given the url https://sell.manheim.man-uat.com/ui/inventory
   # And i click sign in
    Then i enter username ascott4 and password demo
    And select sellerNumber 4998585
    When on page i read the page header
    Then verify text should read INVENTORY
   