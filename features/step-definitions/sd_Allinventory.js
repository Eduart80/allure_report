import * as dotenv from "dotenv";
dotenv.config();
import { Given, When, Then } from "@wdio/cucumber-framework";
import inputPage from "../pageobjects/allinventory.page.js";
import simulcast from "../pageobjects/simulcastInLane.page.js";
import { expect } from "chai";

let userName = process.env.userName;
let pass = process.env.pass;

Given(/^the url for inventory page$/, async () => {
  await inputPage.open(process.env.url);
});
When(/^i click (.+)$/, async () => {
  let signin = inputPage.signIn;
  await signin.click();
  await browser.pause(5000);
});
Then(/^i enter username and password$/, async () => {
  let fieldName = await inputPage.userName;
  await fieldName.setValue(userName);
  let fieldPass = await inputPage.password;
  await fieldPass.setValue(pass);
  let clickButton = await inputPage.button;
  await clickButton.click();
  await browser.pause(15000);
});
Then(/^select sellerNumber (.+)$/, async (number) => {
  let selectSellar = await inputPage.sellerName;
  await selectSellar.waitForDisplayed({
    timeout: 25000,
    timeoutMsg: "mbaroj koha",
  });
  await selectSellar.setValue(number);
  await browser.pause(7000);
  let clickButton = await inputPage.buttonGo;
  await clickButton.click();
});
When(/^on page i read the page header$/, async () => {
  let clickInventoryMenu = await simulcast.inventory;
  await clickInventoryMenu.waitForDisplayed({ timeout: 15000 });
  await clickInventoryMenu.click();
  await browser.pause(10000);
});
When(/^verify text should read (.+)$/, async (name) => {
  let read = await inputPage.readHeader;
  await read.waitForDisplayed({ timeout: 15000 });
  let res = await read.getText();
  expect(res).to.be.eq(name);
});
