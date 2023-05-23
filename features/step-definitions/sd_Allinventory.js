import { Given, When, Then } from '@wdio/cucumber-framework';
import inputPage from '../pageobjects/allinventory.page.js';
import simulcast from '../pageobjects/simulcastInLane.page.js'
import { expect } from 'chai';

Given( /^the url (.+)$/,async (page)=>{
    await inputPage.open(page)
})
When(/^i click (.+)$/,async ()=>{
    let signin = inputPage.signIn
    await signin.click()
   await browser.pause(5000)
})
Then(/^i enter username (.+) and password (.+)$/, async (user, pass)=>{
    
    let fieldName = await inputPage.userName
    let res1 = await fieldName.setValue(user)
    let fieldPass = await inputPage.password
    let res2 = await fieldPass.setValue(pass)
    let clickButton = await inputPage.button
    await clickButton.click()
    await browser.pause(15000)
    
})
Then(/^select sellerNumber (.+)$/, async (number)=>{
    let selectSellar = await inputPage.sellerName
    await selectSellar.waitForDisplayed({timeout:25000,timeoutMsg:'mbaroj koha'})
    await selectSellar.setValue(number)
    await browser.pause(7000)
    let clickButton = await inputPage.buttonGo
    await clickButton.click()
    
})
When(/^on page i read the page header$/,async ()=>{
    let clickInventoryMenu = await simulcast.inventory
    await clickInventoryMenu.waitForDisplayed({timeout:10000})
    await clickInventoryMenu.click()
    await browser.pause(10000)
    
})
When(/^verify text should read (.+)$/,async (name)=>{
    let read = await inputPage.readHeader
    await read.waitForDisplayed({timeout:15000})
    let res = await read.getText()
    expect(res).to.be.eq(name)
 })
