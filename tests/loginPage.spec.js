//HANDLING DEMOBLAZE

import{test, expect} from "@playwright/test"

test ("handling demoblaze", async function({page}){

    // BROWSER LAUNCH

    await page.goto('https://www.demoblaze.com/')

    console.log(await page.title())
    console.log(await page.url())

    //ASSERTION 
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')


//CLICK ON LOGIN LINK TEXT

await page.locator('[id="login2"]').click()
await page.waitForTimeout(2000)


//FILL USERNAME

await page.locator('#loginusername').fill('suganth18')
await page.waitForTimeout(2000)

//PASSWORD
await page.locator('id=loginpassword').fill('suganth123')
await page.waitForTimeout(2000)


//LOGIN-BTN
await page.locator('[onclick="logIn()"]').click()
await page.waitForTimeout(2000)


//ASSERTION

await expect(await page.locator('[id="logout2"]')).toBeVisible
await page.waitForTimeout(2000)


//Find Multiple Web Elements

let linkText = await page.$$('//a')

for (const element of  linkText) {
    let text =await element.textContent()
    console.log(text)
}

console.log("-------##------")
//Products

let listOfProducts= await page.$$("//div//h4//a")

for (const product of listOfProducts) {
   let text= await product.textContent()
   console.log(text)
    
}

})



