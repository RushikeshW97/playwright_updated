import { expect, Page } from "@playwright/test";

export default class HomePage{
    private readonly serviceTitleLocator = "string";

    constructor(private page: Page){

    }


    async expectServiceTitleToBeVisible(){
        //await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({timeout: 150000})
    }
}