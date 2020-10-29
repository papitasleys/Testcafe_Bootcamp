import { Selector } from 'testcafe';

class Page {
    constructor() {
        //practica 2
        this.link2 = Selector('a').withText('A/B Testing');
        this.text21 = Selector('#content > div > h3');

        //practica 3
        this.linkForgotPassword = Selector('a').withText('Forgot Password');
        this.inputEmail = Selector('#email');
        this.buttonRetrievePassword = Selector('#form_submit');
        this.textRetrieveResult = Selector('#content');
        this.textServerError = Selector('h1').withText('Internal Server Error');

        //practoca 4
        this.linkCheckboxes = Selector('a').withText('Checkboxes');
        //checkbox padre
        this.baseCheckbox = Selector('#checkboxes  > input[type=checkbox]');
        //checkbox hijos
        this.checkboxFirst = Selector(
            '#checkboxes > input[type=checkbox]:nth-child(1)'
        );
        this.checkboxSecond = Selector(
            '#checkboxes > input[type=checkbox]:nth-child(3)'
        );

        //proctica 5
        this.linkInputs = Selector('a').withText('Inputs');
        this.inputNumbers = Selector(
            '#content > div > div > div > input[type=number]'
        );

        //parctica 6
        this.linkRemoveElements = Selector('a').withText('Add/Remove Elements');
        this.buttonAddElement = Selector('#content > div > button');
        this.baseButtonRemove = Selector(
            '#elements >  button[class=added-manually]'
        );

        //platica 7
        this.inputFirstName = Selector('#first-name');
        this.inputLastName = Selector('#last-name');
        this.inputJobTitle = Selector('#job-title');
        this.radiobuttonHighSchool = Selector('#radio-button-1');
        this.radiobuttonCollege = Selector('#radio-button-2');
        this.radiobuttonGradSchool = Selector('#radio-button-3');
        this.checkboxMale = Selector('#checkbox-1');
        this.checkboxFemale = Selector('#checkbox-2');
        this.checkboxNotSay = Selector('#checkbox-3');
        this.selectExperience = Selector('#select-menu');
        this.optionExperience = Selector('#select-menu > option:nth-child(5)');
        this.datepickerDate = Selector('#datepicker');
        this.buttonSubmitForm = Selector(
            'body > div > form > div > div:nth-child(15) > a'
        );
        this.textSubmitTitle = Selector('h1').withText(
            'Thanks for submitting your form'
        );

        // pratcaca 8 (login)
        this.linkLogin = Selector('a').withText('Form Authentication');
        this.headerLogin = Selector('#content > div > h2');
        this.inputUsername = Selector('#username');
        this.inputPassword = Selector('#password');
        this.buttonSubmitLogin = Selector('#login > button');
        this.textLoginSuccess = Selector('#flash');

        //practica 9
        this.linkKeyPress = Selector('a').withText('Key Presses');
        this.textKeyPressResult = Selector('#result');

        //practica 10
        this.linkContextMenu = Selector('a').withText('Context Menu');
        this.hotspotPopo = Selector('#hot-spot');

        //practica11
        this.linkSlider = Selector('a').withText('Horizontal Slider');
        this.sliderMain = Selector('#content > div > div > input[type=range]');
        this.rangeValue = Selector('#range');
    }
}

export default new Page();
