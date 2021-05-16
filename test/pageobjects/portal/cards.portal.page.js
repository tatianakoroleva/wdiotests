import PortalPage from "./portal.page";

class CardsPage extends PortalPage {
    get sectionHeader(){ return $('//h1'); }

    async open(){
        return super.open('/flash');
    }

    async isCardsOpen(){
        await expect(browser).toHaveUrlContaining('/flash');
        const text = this.sectionHeader.getText();
        return expect(text).toEqual('Flash  in beta mode so far');
    }
}

export default new CardsPage();