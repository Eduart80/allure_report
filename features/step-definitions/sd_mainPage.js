import { Given, Then, When } from "@wdio/cucumber-framework";
import {expect as chaiExpect } from 'chai'
import mainPagePage from "../pageobjects/mainPage.page.js";
import page from "../pageobjects/page.js";



Given(/^the local url (.+)$/, async (link)=>{
    await browser.url(link)
    console.log(await browser.getTitle());
    await browser.pause(3000)
})
When(/^start clicking on the button "Click me"$/,async()=>{
    let butnClick = await mainPagePage.buttonClick
    await butnClick.click()
    await butnClick.click()
    await butnClick.click()
})
Then(/^count how many times the button was clicked$/,async()=>{
    let getCount = await mainPagePage.inside
    let res = await getCount.getText()
    let resInt = parseInt(res)
    chaiExpect(resInt).to.be.eq(3)
    let resetBtn = await mainPagePage.resetBtn
    await resetBtn.click()
    await browser.pause(2000)
})