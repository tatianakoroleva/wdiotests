import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';
import CardsPage from '../pageobjects/portal/cards.portal.page';

describe ('Navigation', () => {
    before(() => {
        browser.login(process.env.LOGIN, process.env.PASSWORD);
    });

    // beforeEach(() => {
    //     MainPage.open();
    // });

    it('courses page open', async () => {
        await MainPage.goToCourses();
        await CoursesPage.isOpen();
    });

    it('cards page is open', async () => {
        await MainPage.goToCards();
        await CardsPage.isCardsOpen();
    });


})