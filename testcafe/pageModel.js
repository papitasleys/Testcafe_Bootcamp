import { Selector } from 'testcafe';

class Page {
    constructor() {
        //practica 2
        this.link2 = Selector('a').withText('A/B Testing')
        this.text21 = Selector('#content > div > h3')

        //practica 3
        this.linkForgotPassword = Selector('a').withText('Forgot Password')
        this.inputEmail = Selector('#email')
        this.buttonRetrievePassword = Selector('#form_submit')
        this.textRetrieveResult = Selector('#content')

        //practoca 4
        this.linkCheckboxes = Selector('a').withText('Checkboxes')
        //checkbox padre
        this.baseCheckbox = Selector('#checkboxes  > input[type=checkbox]')
        //checkbox hijos
        this.checkboxFirst = Selector(
            '#checkboxes > input[type=checkbox]:nth-child(1)'
        )
        this.checkboxSecond = Selector(
            '#checkboxes > input[type=checkbox]:nth-child(3)'
        )

        //proctica 5
        this.linkInputs = Selector('a').withText('Inputs')
        this.inputNumbers = Selector(
            '#content > div > div > div > input[type=number]'
        )

        //parctica 6
        this.linkRemoveElements = Selector('a').withText('Add/Remove Elements')
        this.buttonAddElement = Selector('#content > div > button')
        this.baseRemoveElements = Selector('#elements')
    }
}

export default new Page();
