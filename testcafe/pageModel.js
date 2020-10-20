import { Selector } from 'testcafe';

class Page {
    constructor() {
        //practica 2
        this.link2 = Selector('a').withText('A/B Testing');
        this.text21 = Selector('#content > div > h3');

        //practica 3
        this.linkForgotPassword = Selector('a').withText('Forgot Password');
        this.inputEmail = Selector('#email');
        this.buttonRetrievePassword = Selector('#form_submit')
        this.textRetrieveResult = Selector('#content')

        //practoca 4
        this.linkCheckboxes = Selector('a').withText('Checkboxes');
        //checkbox padre
        this.listCheckboxParent= Selector('#checkboxes');
        //checkbox hijos
        this.checkboxFirst = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
        this.checkboxSecond= Selector('#checkboxes > input[type=checkbox]:nth-child(3)');
    }
}

export default new Page();
