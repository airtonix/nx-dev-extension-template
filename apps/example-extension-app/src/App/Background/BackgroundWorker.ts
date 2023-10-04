import browser from 'webextension-polyfill';

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    //show the welcome page
    const url = browser.runtime.getURL('newtab.html');
    await browser.tabs.create({ url });
  }
});
