import PortalPage from "./portal.page";

class CardsPage extends PortalPage {
    get sectionHeader(){ return $('//h1'); }

    open(){
        return super.open('/flash');
    }

    isCardsOpen(){
        expect(browser).toHaveUrlContaining('/flash');
        const text = this.sectionHeader.getText();
        expect(text).toEqual('Flash  in beta mode so far');
    }
}

export default new CardsPage();