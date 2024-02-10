import { Given, Then, When } from "@wdio/cucumber-framework";
import {expect as chaiExpect } from 'chai'
import Page from "../pageobjects/page.js";




Given(/^The page url i sign in to manheim.man-uat.com$/, async ()=>{

    console.log("url");
    await browser.pause(10000)
})
When(/^enter user (.+) and password (.+)$/,async(name, pass)=>{
  console.log("login "+ name +", "+ pass);
  await browser.pause(2000)
})
Then(/^I signin i navigate to Selling Center page$/,async()=>{
    
    console.log("sell page");
    await browser.pause(2000)
})
Then(/^i verify my page title to be "(.+)"$/,async(text)=>{
    console.log("title = "+ text);
   
    await browser.pause(2000)
})