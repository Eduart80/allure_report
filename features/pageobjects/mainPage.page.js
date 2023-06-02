

class mainPage {
    // open(path){
    //     return browser.url(path)
    // }

    get buttonClick(){
        return $('#butnClick')
    }
    get resetBtn(){
        return $('#btnReset')
    }
    get inside(){
        return $('#inside')
    }
}
export default new mainPage()