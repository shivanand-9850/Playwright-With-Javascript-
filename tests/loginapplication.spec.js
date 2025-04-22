const { test,expect } = require("@playwright/test");
const LoginPage=require("../pages/loginapplication");
const DashboardPage= require("../pages/dashborad");
const testdate = JSON.parse(JSON.stringify(require("../testdata.json")))


    test("Login To Application using POM", async function ({page}){


        await page.goto("https://admin-test.clearcost.ag/login",{ timeout: 60000 })
        const loginPage=new LoginPage(page)
        const dashboardPage = new DashboardPage(page)
        await loginPage.loginToApplication(testdate.username, testdate.passwoed)

        await loginPage.verifyLogIn()

        await dashboardPage.LogoutToApplication()
    
        await dashboardPage.verifyLogOut()
    });

    // test("logout To Application using POM", async function ({page}) 
    //  {
    //     const dashboardPage = new DashboardPage(page)
    //     await dashboardPage.LogoutToApplication()
        
    // });
