import PortalPage from "./portal.page";

class CoursesPage extends PortalPage{
    get sectionHeader(){ return $('section > div > h1'); }

    async open(){
        return super.open('/course');
    }

    async isOpen(){
        await expect(browser).toHaveUrlContaining('/course');
        const text = await (await this.sectionHeader).getText();
        await expect(text).toEqual('Interactive Courses');
    }
}

export default new CoursesPage();
