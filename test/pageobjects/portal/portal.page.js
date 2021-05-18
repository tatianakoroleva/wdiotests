import Page from '../page';

export default class PortalPage extends Page {
    get linkCourses() { return $('[data-qa=\'topmenu-Courses\']'); }
    get linkCards() { return $('[data-qa=\'topmenu-Cards\']'); }
    get linkDiary() { return $('[data-qa=\'topmenu-Diary\']'); }
    get linkChallenges() { return $('[data-qa=\'topmenu-Challenges\']'); }

     async goToCourses(){
         (await this.linkCourses).click();
    }

    async goToCards(){
        (await this.linkCards).click();
    }

    async goToDiary(){
        return this.linkDiary.click();
    }

    async goToChallenges(){
        return this.goToChallenges.click();
    }

}
