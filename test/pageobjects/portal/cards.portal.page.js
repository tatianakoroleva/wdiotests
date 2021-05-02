import PortalPage from "./portal.page";

class CardsPage extends PortalPage {
    get sectionHeader(){ return $('*[@id="root"]/section/h1');}

    open(){
        return super.open('/flash');
    }

    isCardsOpen(){
        expect(browser).toHaveUrlContaining('/flash');
        expect(this.sectionHeader).toHaveText('Flash cards in beta mode so far');
    }
}

export default new CardsPage();