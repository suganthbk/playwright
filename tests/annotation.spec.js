//TAG AND ANNOTATION

import {test,expect1} from "@playwright/test"

test("Test 1 @smoke",async()=>{
    console.log("SMOKE")
})

test("Test 2 @sanity" , async() =>{
    console.log("SANITY")
})

test("Test 3 @reg" , async() =>{
    console.log("REG")
})
test("Test 4 @smoke@sanity" , async() =>{
    console.log("SMOKE WITH SANITY")
})

test("Test 5 @smoke@reg" , async() =>{
    console.log("SMOKE WITH REG")
})

test("Test 6 @sanity@reg" , async() =>{
    console.log("SANITY WITH REG")
})

