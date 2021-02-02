#!/usr/bin/env node
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function hello(){
	let driver = await new Builder()
        .forBrowser('firefox').build();
        
    //Accedemos a la página stackoverflow
        await driver.get('https://es.stackoverflow.com/');
    
    //Realizamos busqueda 
        await driver.findElement(By.name('q')).sendKeys('selenium',Key.ENTER);
    
    //Localizamos los elementos de la clase result-link para coger los titulos
        let qs = await driver.wait(until.elementsLocated(By.className('result-link')));

    //Localizamos los elementos de la clase question-hyperlink para acceder a las url
        let url = await driver.wait(until.elementsLocated(By.className('question-hyperlink')));

    //Recorremos los arrays resultantes
        for(var i=0; i <qs.length;i++){

            //Mostramos por consola los titulos
                console.log(await qs[i].getText());
            //Mostramos las url por consola
                console.log(await url[i].getAttribute('href'));
        };
})();
