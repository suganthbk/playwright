import {test,expect} from '@playwright/test'

test("Handling DemoBlaze",async function({page}){

    await page.goto("https://www.demoblaze.com/")

    
    let pageTitle=await page.title()
    console.log(pageTitle)

    let pageUrl=await page.url()
    console.log(pageUrl)

    //Assertion

    await expect(page).toHaveTitle("STORE")
    await expect(page).toHaveURL("https://www.demoblaze.com/")

    //LOGO

    await expect(page.locator('[id="nava"]')).toBeVisible()

    //LOGIN

    await page.locator('[id="login2"]').click()
    await page.waitForTimeout(2000)

    //FILL USERNAME AND PASSWORD
    await page.locator('[id="loginusername"]').fill('suganth18')
    await page.waitForTimeout(2000)
    await page.locator('[id="loginpassword"]').fill('suganth123')
    await page.waitForTimeout(2000)



//LOGIN

await page.locator('[onclick="logIn()"]').click();
await page.waitForTimeout(5000)


//validate username
let user=await page.locator('[id="nameofuser"]').textContent()
await expect(user).toEqual("Welcome suganth18")


//Find multiple web element



})