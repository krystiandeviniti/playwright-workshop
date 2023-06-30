import {FrameLocator, Page} from '@playwright/test';
import { iframes } from '../pages/iframes.po';
import { issueView } from '../pages/issueView.po';


export default class RemoveActions{
    readonly page: Page;
    readonly iframe: FrameLocator;
   
    constructor(page: Page){
        this.page = page;
        this.iframe = page.frameLocator(iframes.projectMainView)
    }

    async removingTestCase(): Promise<void> {
        await this.iframe.locator(issueView.buttons.delete).click();
        await this.iframe.locator(issueView.buttons.deleteConfirm).click();
    }
}