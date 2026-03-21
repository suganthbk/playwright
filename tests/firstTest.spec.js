//HANDLING MY FIRST TEST SCRIPT

import{test,expect} from "@playwright/test"

test("Handling Facebook web app", async function({page}){   //Fixture 

    //Browser Lauch 

    await page.goto('https://www.facebook.com/')

    //Title & URL

   let title= await page.title()
   console.log(title)

   console.log(await page.url())


   //ASSERTION

   await expect(page).toHaveTitle("Facebook – log in or sign up")
   await expect(page).toHaveURL("https://www.facebook.com/")


})


