import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe ('Navigation', () => {
    before(() => {
        browser.login('nenobi3527@iludir.com', 't1875456');
    });

    beforeEach(() => {
        MainPage.open();
    });

    it('courses page open', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    });

    // it.only('cards page is open', () => {
    //     MainPage.goToCards();
    //     CardsPage.isCardsOpen();
    // });


})