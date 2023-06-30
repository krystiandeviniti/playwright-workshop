import { test, expect } from '@playwright/test';
import {data} from '../data/data'
import { iframes } from '../pages/iframes.po';
import { testCases } from '../pages/testCases.po';
import { issueView } from '../pages/issueView.po';
import  CreateActions from '../lib/CreateActions.act'
import  NavigationActions from '../lib/NavigationActions.act'
import  RemoveActions from '../lib/RemoveActions.act'
import  IssueActions from '../lib/IssueActions.act'
const chance = require('chance').Chance();

test('TASK-1 - create first test case', async ({ page }) => {
const iframe = page.frameLocator(iframes.projectMainView)
const summaryName = chance.word({length: 8})
const componentValue = 'Account'
const createActions = new CreateActions(page);
const navigationActions = new NavigationActions(page);
const removeActions = new RemoveActions(page);
const issueActions = new IssueActions(page);

  await test.step('Open application', async() => {
      await page.goto(data.url);
      await navigationActions.closeSpotlightDialog()
   })

  await test.step('Open Test Case tab', async () => {
      await navigationActions.openTestCase();
  })

  await test.step('Create Test Case', async () => {
      await createActions.createTestCase(summaryName, componentValue)
  })

  await test.step('Find created Test Case', async () => {
      await iframe.locator(testCases.mainView.summaryColumn).getByText(summaryName).click();
  })

  await test.step('Checking fields Summary and Component', async () => {
    await issueActions.checkSummaryFieldHaveText(summaryName)
    await issueActions.checkComponentFieldHaveText(componentValue)
  })

  await test.step('Removing Test Case', async () => {
    await removeActions.removingTestCase()
  })

  await test.step('Removed test case is hidden', async () => {
    await expect(iframe.locator(testCases.mainView.summaryColumn).getByText(summaryName), 'Test case is still visible.').toBeHidden();
  })




  // 1. Przejdź do strony 'https://automation-staging-deviniti.atlassian.net/projects/SZKOL?selectedItem=com.atlassian.plugins.atlassian-connect-plugin%3Acom.deviniti.atlassian.apps.rtm-test__project-main-view'
 
  // 2. Zamknij spotlight

  // 3. Wejdź do zakładki "Test Cases"

  // 4. Kliknij folder All na drzewku

  // 5. Kliknij w przycisk "Create Test Case"

  // 6. Uzupełnij summary i pole components (opcja: Account) na ekranie create
  
  // 7. Kliknij przycisk "Create"

  // 8. Znajdź utworzony Test Case w tabeli i przejdź do niego

  // 9. Sprawdź, czy pola summary oraz components są uzupełnione
   
  //10. Usuń stworzony test case
 
});