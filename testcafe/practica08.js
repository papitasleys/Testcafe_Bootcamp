/*
    hacer la pagina de login
*/ 

import { selector } from "testcafe";
import page from "./pageModel";

fixture('Práctica 8 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Test prueba login', async t => {
    await t
        .click(page.linkLogin)
    
    await t
        .expect(page.headerLogin.visible).ok()
        .typeText(page.inputUsername, 'tomsmith', {speed : 0.5})
        .expect(page.inputUsername).eql('tomsmith')
        .typeText(page.inputPassword, 'SuperSecurePassword!', {speed : 0.5})
        .expect(page.inputPassword).eql('●●●●●●●●●●●●●●●●●●●●')
        .click(page.buttonSubmitLogin)
        .expect(page.textLoginSuccess.innerText).eql('You logged into a secure area!')
});