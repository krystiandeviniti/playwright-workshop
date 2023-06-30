import {FrameLocator, Page} from '@playwright/test';
import { iframes } from '../pages/iframes.po';
import { testCases } from '../pages/testCases.po';
import { newTestCase } from '../pages/newTestCase.po';

export default class CreateActions{
    readonly page: Page;
    readonly iframe: FrameLocator;
   
    constructor(page: Page){
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView)
    }

    async createTestCase(summaryName: string, componentValue: string): Promise<void> {
        await this.iframe.locator(testCases.buttons.createTestCase).first().click();
        await this.iframe.locator(newTestCase.details.summary).click();
        await this.iframe.locator(newTestCase.details.summary).fill(summaryName);
        await this.iframe.locator(newTestCase.details.component.input).first().fill(componentValue);
        await this.iframe.locator(newTestCase.details.component.option).getByText(componentValue).click();
        await this.iframe.locator(newTestCase.buttons.create).first().click();
    }
}