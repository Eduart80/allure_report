/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(path);
  }
  get signIn() {
    return $('[class="noauth btn btn-outline"]');
  }
  get userName() {
    return $('input[id="user_username"]');
  }
  get password() {
    return $('input[id="user_password"]');
  }
  get button() {
    return $("#submit");
  }

  waitPageLoads = async () => {
    await browser.wauitUntil(async () => {
      console.log('Hyra....');
        await browser.execute(() => 
        document.readyState === "complete"),
        { timeout: 60000, timeoutMsg: "timesup 60 sec" }
    });
  };
}
