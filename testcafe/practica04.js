/*
    practica 4
*/
import { selector } from "testcafe";
import page from "./pageModel";

fixture('Práctica 4 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar chetbotses des seleccionados', async t => {
    await t
            .click(page.linkCheckboxes)        

    await t
        .click(page.baseCheckbox.nth(1))

    await t.expect(page.baseCheckbox.nth(0).checked).notOk()
    await t.expect(page.baseCheckbox.nth(1).checked).notOk()
});

test('Probar chetbotses seleccionados', async t => {
    await t
            .click(page.linkCheckboxes)        

    await t
        .click(page.baseCheckbox.nth(0))

    await t.expect(page.baseCheckbox.nth(0).checked).ok()
    await t.expect(page.baseCheckbox.nth(1).checked).ok() 
});