Feature: testing click event

Scenario: Click 3 times and count the output
Given the local url http://127.0.0.1:5500/public/index.html
And start clicking on the button "Click me"
Then count how many times the button was clicked