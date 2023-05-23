import Page from "./page.js";



class simulcastInLane extends Page {


    get inventory(){
        return $('[id="main-site-nav-2"]')
    }

}
export default new simulcastInLane()