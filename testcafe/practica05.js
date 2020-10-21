/*
    practica 5
*/
import { selector } from "testcafe";
import page from "./pageModel";

fixture('Práctica 5 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probas input numeros con letras', async t => {
    await t
        .click(page.linkInputs)       

    await t
        .typeText(page.inputNumbers, 'letra223', {speed: 0.5})
        .expect(page.inputNumbers.value).eql('223')
});


test('Probar input numeros, solo letras', async t => {
    await t
        .click(page.linkInputs)       

    await t
        .typeText(page.inputNumbers, 'letrs', {speed: 0.5})
        .expect(page.inputNumbers.value).eql('')
});

test('Probar input numeros,con símbolos', async t => {
    await t
        .click(page.linkInputs)       

    await t
        .typeText(page.inputNumbers, '**-82e2', {speed: 0.5})
        .expect(page.inputNumbers.value).eql('-828')
});

//tarea dividir pruebas, checar el screenshot