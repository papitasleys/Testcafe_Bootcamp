/*
    practica 3
*/
import { selector } from "testcafe";
import page from "./pageModel";

fixture('Práctica 3 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar formulario de recuperación', async t => {
    await t
        .click(page.linkForgotPassword)

    await t
        .typeText(page.inputEmail, 'email@email.me')
        .expect(page.inputEmail.value).eql('email@email.me')
        .click(page.buttonRetrievePassword)

    await t
        .expect(page.textRetrieveResult.innerText).contains('sent', 'prueba exitosa')
})