import {FrameLocator, Page} from '@playwright/test';
import { iframes } from '../pages/iframes.po';
import { homePage } from '../pages/homePage.po';
import { testCases } from '../pages/testCases.po';

export default class NaviagtionActions{
    readonly page: Page;
    readonly iframe: FrameLocator;
   
    constructor(page: Page){
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView)
    }

    async closeSpotlightDialog(): Promise<void> {
        await this.iframe.locator(homePage.buttons.skipPopup).click();
    }

    async openTestCase(): Promise<void>{
        await this.iframe.locator(homePage.buttons.testCases).first().click();
        await this.iframe.locator(testCases.buttons.all).click();
    }
}