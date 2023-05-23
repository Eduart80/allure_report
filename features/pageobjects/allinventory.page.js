import Page from "./page.js";

class allinventotyPage extends Page {

  get inspectionHeader() {
    return $('[class="inspection-header"]');
  }
  get readHeader() {
    return $('[class="mt-0 mb-1"]');
  }
  get verifyHeader() {
    return $(".example input");
  }
  get sellerName() {
    return $('input[id="seller-numbers"]')
  }
  get buttonGo(){
    return $('[data-testid="go-seller-numbers"]')
  }

}
export default new allinventotyPage();
