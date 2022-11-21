/**
 * @jest-environment puppeteer
 */
import 'expect-puppeteer';

import puppeteer from 'puppeteer';

describe('super awesome end to end tests', () => {
  jest.setTimeout(20000);
  let browser: any;
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/extension');
  });

  test('if header aka h1 is not null', async () => {
    const header = await page.$eval(
      '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > h1',
      (el: { textContent: string }) => el.textContent,
    );
    expect(header).not.toBeNull;
  });

  test('if header aka h1 contains DOM Manipulation', async () => {
    const header = await page.$eval(
      '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > h1',
      (el: { textContent: string }) => el.textContent,
    );
    expect(header).toContain('DOM Manipulation');
  });

  test('if box contains EUR symbol(€)', async () => {
    const box = await page.$eval('#box > p', (el: { textContent: string }) => el.textContent);
    expect(box).toContain('€');
  });

  test('if more detailed dummy information on climate change is not null', async () => {
    const detailedDummyInfo = await page.$eval(
      '#detailedInformation > p',
      (el: { textContent: string }) => el.textContent,
    );
    expect(detailedDummyInfo).not.toBeNull;
  });

  afterAll(() => browser.close());
});
