import {FrameLocator, Page, expect} from '@playwright/test';
import { iframes } from '../pages/iframes.po';
import { issueView } from '../pages/issueView.po';


export default class RemoveActions{
    readonly page: Page;
    readonly iframe: FrameLocator;
   
    constructor(page: Page){
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView)
    }

    async checkSummaryFieldHaveText(summaryName: string): Promise<void> {
        await expect(this.iframe.locator(issueView.details.summary), 'Summary is empty').toHaveText(summaryName);
    }
    async checkComponentFieldHaveText(componentValue: string): Promise<void> {
        await expect(this.iframe.locator(issueView.details.components), 'Component is empty').toHaveText(componentValue);
    }
}