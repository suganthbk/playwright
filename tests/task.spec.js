import {test,expect} from "@playwright/test"

test("launch" , async function({page}){
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.waitForTimeout(3000)


    //1.USING ID
    await page.fill("id=username" , "student")
    await page.fill("id=password","student@123")
    await page.click('[id="submit"]')

    //2.USING NAME
    await page.getByRole("textbox",{name:"username"}).fill("student")
    await page.getByRole("textbox",{name:"password"}).fill("student@123")

 // submit = no name


 // 3. USING CLASS

 //username = no class
 //password = no class
 awaitpage.locator('.btn').click()
})




