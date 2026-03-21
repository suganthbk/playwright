//HANDLING HOOK1

import {test,expect}from "@playwright/test"

test("Handling Demoblaze", async function({page}){
    await page.goto('https://www.demoblaze.com/')

    //Click on LoginLinkText

await page.locator('id="login2"')


//Scenario 1
let productsList=await page.$$('[class="hrefch"]')



//Scenario 3

await page.click('[id="id=cartur"]')




})