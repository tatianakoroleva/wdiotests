import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe ('Navigation', () => {
    before(() => {
        browser.login(process.env.LOGIN, process.env.PASSWORD);
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