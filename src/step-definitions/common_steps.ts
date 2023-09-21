import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';

Given("app is open", async () => {
    await LoginPage.homeButtonDisplayed();
});