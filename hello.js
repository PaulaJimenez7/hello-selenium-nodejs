#!/usr/bin/env node
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function hello(){
	let driver = await new Builder()
		.forBrowser('firefox').build();
	await driver.get('https://www.google.com/');

	await driver.switchTo().frame(0);
	await driver.findElement(By.id('introAgreeButton')).click();

	await driver.switchTo().defaultContent();
	await driver.findElement(By.name('q')).sendKeys('devops',Key.ENTER);

})();
