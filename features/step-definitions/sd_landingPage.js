import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import inputPage from '../pageobjects/allinventory.page.js';
import simulcast from '../pageobjects/simulcastInLane.page.js'

Given(/^Start to type your (.+) step here$/,(number)=>{
    //code here
    console.log(number);
})
When(/^Start to type your (.+) step here$/,(name)=>{
    //code
    console.log(name);
})
Then(/^Start to type your (.+) step here$/,(Then)=>{
    //code
    expect(condition).to.be.eq(Then)
})

