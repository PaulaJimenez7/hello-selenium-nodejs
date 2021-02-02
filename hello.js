#!/usr/bin/env node
const webdriver = require('selenium-webdriver');
(async function hello(){
	let driver = new webdriver.Builder()
		.forBrowser('firefox').build();
	await driver.get('https://www.google.com/');
})();
