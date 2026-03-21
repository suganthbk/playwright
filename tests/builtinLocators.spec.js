//HANDLING BUILT IN LOCATORS


const {test,expect} = require('@playwright/test')

test("Handling Bulit-in locators",async function({page}){

    //BROWSER LAUNCH 

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //ALT
    await expect(page.getByAltText('company-branding')).toBeVisible()


    //PLACEHOLDER

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    

    //ROLE
    await page.getByRole('button',{name:" Login "}).click()
    await page.waitForTimeout(5000)
})