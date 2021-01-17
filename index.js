const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch( {headless : false});
    const page = await browser.newPage();
    //tentei usar esse: https://twitch.facepunch.com/ mas não conseguia pegar o valor que precisava
    await page.goto('https://www.twitch.tv/');
    await page.evaluate( () => {
      
      const live = document.querySelectorAll("p.tw-strong.tw-upcase.tw-white-space-nowrap");
      //aqui eu tentei coletar o dado que ele estaria on
    });
    
    
    

    console.log(live)
    await browser.close();
  })();

