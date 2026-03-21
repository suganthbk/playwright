import {test} from "@playwright/test"

import {data1,data2} from "../testData/testDataJson.json"

test("Reading The Data from JSON", async({page})=>{

    //BROSWER LAUNCH
    await page.goto('https://www.demoblaze.com/')

    await page.locator('[id="login2"]').click();

    //USERNAME  //PASSWORD

    await page.locator('[id="loginusername"]').fill(data1.username)
    await page.locator('[id="loginpassword"]').fill(data1.password)

    //Login

    await page.click('[onclick="logIn()"]')
})