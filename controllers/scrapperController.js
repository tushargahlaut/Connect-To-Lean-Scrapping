const puppeteer = require("puppeteer");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getConferencesResurchify = catchAsyncErrors(async(req, res, next) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.resurchify.com/e/conference/all-categories/all-countries/all-years/page/1/"
    );

    const HackList = await page.evaluate(() => {
        let hotelsElms = document.querySelectorAll('main .w3-table');
        let results=[];

        hotelsElms.forEach((hack) => {
             results.push({
          title: hack.querySelector("b").innerText.trim(),
          link:hack.querySelector("a").href,
          location:hack.querySelector("span b").innerText.trim(),
          schedule: hack.querySelector("td b:nth-child(2)").innerText.trim(),
          deadline: hack.querySelector("td b:nth-child(4)").innerText.trim(),
          tags: hack.querySelector("tbody tr:nth-child(3)").innerText.trim()
                
        })

        });

       
        return results;
    });
    
   
    res.json(HackList);
  
    console.log(HackList);
    await browser.close();
    res.status(200).json({
      results
    })
  });

  
exports.getSymposiumResurchify = catchAsyncErrors(async(req, res, next) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.resurchify.com/e/symposium/all-categories/all-countries/all-years/page/1/"
    );

    const HackList = await page.evaluate(() => {
        let hotelsElms = document.querySelectorAll('main .w3-table');
        let results=[];
        
        hotelsElms.forEach((hack) => {
             results.push({
          title: hack.querySelector("b").innerText.trim(),
          link:hack.querySelector("a").href,
          location:hack.querySelector("span b").innerText.trim(),
          schedule: hack.querySelector("td b:nth-child(2)").innerText.trim(),
          deadline: hack.querySelector("td b:nth-child(4)").innerText.trim(),
          tags: hack.querySelector("tbody tr:nth-child(3)").innerText.trim()
                
        })

        });

       
        return results;
    });
    
   
    res.json(HackList);
  
    console.log(HackList);
    await browser.close();
    res.status(200).json({
      results
    })
  });
  
    
exports.getSeminarResurchify = catchAsyncErrors(async(req, res, next) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.resurchify.com/e/seminar/all-categories/all-countries/all-years/page/1/"
    );

    const HackList = await page.evaluate(() => {
        let hotelsElms = document.querySelectorAll('main .w3-table');
        let results=[];
        
        hotelsElms.forEach((hack) => {
             results.push({
          title: hack.querySelector("b").innerText.trim(),
          link:hack.querySelector("a").href,
          location:hack.querySelector("span b").innerText.trim(),
          schedule: hack.querySelector("td b:nth-child(2)").innerText.trim(),
          deadline: hack.querySelector("td b:nth-child(4)").innerText.trim(),
          tags: hack.querySelector("tbody tr:nth-child(3)").innerText.trim()
                
        })

        });

       
        return results;
    });
    
   
    res.json(HackList);
  
    console.log(HackList);
    await browser.close();
    res.status(200).json({
      results
    })
  });
  

     
exports.getWorkshopResurchify = catchAsyncErrors(async(req, res, next) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.resurchify.com/e/workshop/all-categories/all-countries/all-years/page/1/"
    );

    const HackList = await page.evaluate(() => {
        let hotelsElms = document.querySelectorAll('main .w3-table');
        let results=[];
        
        hotelsElms.forEach((hack) => {
             results.push({
          title: hack.querySelector("b").innerText.trim(),
          link:hack.querySelector("a").href,
          location:hack.querySelector("span b").innerText.trim(),
          schedule: hack.querySelector("td b:nth-child(2)").innerText.trim(),
          deadline: hack.querySelector("td b:nth-child(4)").innerText.trim(),
          tags: hack.querySelector("tbody tr:nth-child(3)").innerText.trim()
                
        })

        });

       
        return results;
    });
    
   
    res.json(HackList);
  
    console.log(HackList);
    await browser.close();
    res.status(200).json({
      results
    })
  });
  
  
  