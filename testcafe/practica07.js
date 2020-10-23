/*
    practica 7
*/

import { timeStamp } from "console"
import { selector } from "testcafe";
import page from "./pageModel";

fixture('Práctica 7 con testcafe')
    .page('https://formy-project.herokuapp.com/form');

test('Proba de formulario', async t => {
    await t
        .typeText(page.inputFirstName, 'papitas', {speed : 0.5} )
        .expect(page.inputFirstName.value).eql('papitas')
        .typeText(page.inputLastName, 'leys', {speed : 0.5} )
        .expect(page.inputLastName.value).eql('leys')
        .typeText(page.inputJobTitle, 'probador', {speed : 0.5} )
        .expect(page.inputJobTitle.value).eql('probador')
        .click(page.radiobuttonCollege)
        .expect(page.radiobuttonCollege.checked).ok()
        .click(page.radiobuttonHighSchool)
        .expect(page.radiobuttonHighSchool.checked).ok()
        .click(page.radiobuttonGradSchool)
        .expect(page.radiobuttonGradSchool.checked).ok()
        .click(page.checkboxMale)
        .click(page.checkboxFemale)
        .click(page.checkboxNotSay)
        .click(page.selectExperience)
        .click(page.optionExperience)
        .typeText(page.datepickerDate, '01012020', {speed : 0.5} )
        .click(page.buttonSubmitForm)

    await t
        .expect(page.textSubmitTitle.visible).ok()
});

//tarea completar expects y hacer lomismo con el form de login